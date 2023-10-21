import { error } from '@sveltejs/kit';
import OpenAI from 'openai';
import { OPENAI_KEY } from "$env/static/private"

const openai = new OpenAI(OPENAI_KEY);

const example = `[
    {
        "title": "Eye of the Tiger",
        "artist": "Survivor",
        "reasoning": "The energetic beats and motivating lyrics of 'Eye of the Tiger' make it a classic choice for getting pumped up during a workout."
    },
    {
        "title": "Lose Yourself",
        "artist": "Eminem",
        "reasoning": "The powerful lyrics and driving beats of 'Lose Yourself' provide the motivation and energy needed for an intense workout session."
    },
    {
        "title": "Uptown Funk",
        "artist": "Mark Ronson ft. Bruno Mars",
        "reasoning": "This song's catchy rhythm and high-energy vibe can elevate the mood and keep you moving during your exercise."
    },
    {
        "title": "Stronger",
        "artist": "Kanye West",
        "reasoning": "With its sample from Daft Punk's 'Harder, Better, Faster, Stronger', this song has a great tempo and beat to match the pace of a workout."
    }
]`

async function getSpotifyTrackDetails(title, artist) {
    const BASE_URL = 'https://api.spotify.com/v1';

    // Authenticate and get an access token
    const authResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET)
        },
        body: 'grant_type=client_credentials'
    });

    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // Search for the track
    const searchResponse = await fetch(`${BASE_URL}/search?q=track:${encodeURIComponent(title)} artist:${encodeURIComponent(artist)}&type=track&limit=1`, {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    const searchData = await searchResponse.json();
    const track = searchData.tracks.items[0];

    if (!track) return null; // No track found

    return {
        title: track.name,
        artist: track.artists[0].name,
        coverArt: track.album.images[0].url, 
        spotifyLink: track.external_urls.spotify
    };
}


export function POST({ request }) {
    const { prompt } = request.body;

    const completion = openai.chat.completions.create({
        messages: [
            { 
                role: "system", 
                content: "You are GPTune - a song recommendation system which aims to provide the users with the best recommendations based on their query. Please return your answers as a json array of length 4 with the properties: title, artist, reasoning" 
            }, 
            { 
                role: "user", 
                content: "Recommend a song that's perfect for a workout session." 
            },
            { 
                role: "assistant", 
                content: example
            }, 
            {
                role: "user",
                content: prompt
            }
        ],
        model: "gpt-3.5-turbo",
    });

    return completion.then(async (res) => {
        const recommendations = JSON.parse(res.data.choices[0].text);

        // Fetch Spotify details for each song recommendation
        const detailedRecommendations = await Promise.all(recommendations.map(async song => {
            const spotifyDetails = await getSpotifyTrackDetails(song.title, song.artist);
            return {
                ...song,
                ...spotifyDetails
            };
        }));

        return {
            body: detailedRecommendations
        };
    }).catch((err) => {
        return {
            status: 500,
            body: err
        };
    }); 
}

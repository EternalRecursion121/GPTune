import { SvelteKitAuth } from "@auth/sveltekit"
import { SPOTIFY_ID, SPOTIFY_SECRET } from "$env/static/private"
import clientPromise from "$lib/db"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

function Spotify(options) {
    return {
        id: "spotify",
        name: "Spotify",
        type: "oauth",
        authorization: "https://accounts.spotify.com/authorize?scope=user-read-email",
        token: "https://accounts.spotify.com/api/token",
        userinfo: "https://api.spotify.com/v1/me",
        profile(profile) {
          console.log("AGREJGKDJSGKSD")
            console.log(profile)
            return {
                id: profile.id,
                name: profile.display_name,
                email: profile.email,
                image: profile.images?.[0]?.url,
            };
        },
        style: { logo: "/spotify.svg", text: "#fff", bg: "#000" },
        options,
    };
}
export const handle = SvelteKitAuth({
  providers: [
    Spotify({ 
      clientId: SPOTIFY_ID, 
      clientSecret: SPOTIFY_SECRET, 
      authorization: {params: { scope: "playlist-read-private app-remote-control user-top-read playlist-modify-public playlist-modify-private streaming user-modify-playback-state" } } 
    })
  ], 
  adapter: MongoDBAdapter(clientPromise)
})
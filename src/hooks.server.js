import { SvelteKitAuth } from "@auth/sveltekit"
import Spotify from "@auth/core/providers/spotify"
import { SPOTIFY_ID, SPOTIFY_SECRET } from "$env/static/private"
import clientPromise from "$lib/db"
import { MongoDBAdapter } from "@auth/mongodb-adapter"

export const handle = SvelteKitAuth({
  providers: [
    Spotify({ 
      clientId: SPOTIFY_ID, 
      clientSecret: SPOTIFY_SECRET, 
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {scope: "playlist-read-private app-remote-control user-top-read playlist-modify-public playlist-modify-private streaming user-modify-playback-state"}
      }})
  ], 
  adapter: MongoDBAdapter(clientPromise)
})
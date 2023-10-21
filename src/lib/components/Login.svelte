<script>
    import { signIn } from "@auth/sveltekit/client";
    import { goto } from "$app/navigation";
</script>

<button class="text-[#FFFFFF] text-6xl" on:click={async () => await goto("https://accounts.spotify.com/authorize?response_type=code&client_id=f0b1d692e760487bb857c3a6647cd08f&?scope=user-read-email%20playlist-read-private%20user-top-read%20playlist-modify-public%20playlist-modify-private%20user-modify-playback-state&redirect_uri=https%3A%2F%2Fgptune.vercel.app%2Fauth%2Fcallback%2Fspotify")}>SIGN IN WITH SPOTIFY</button>
<script>
    import { signIn } from "@auth/sveltekit/client";
</script>

<button class="text-[#FFFFFF] text-6xl" on:click={() => signIn("spotify")}>SIGN IN WITH SPOTIFY</button>
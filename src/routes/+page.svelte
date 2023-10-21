<script>
    import SearchBar from "../lib/components/SearchBar.svelte";
    import { page } from "$app/stores"
    import Login from "$lib/components/Login.svelte"
</script>

{#if $page.data.session && !($page.data.session?.error === "RefreshAccessTokenError")}
  User is logged in
<SearchBar/>
{:else}
  <Login />
{/if}

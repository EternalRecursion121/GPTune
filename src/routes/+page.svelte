<script>
    import SearchBar from "../lib/components/SearchBar.svelte";
    import { page } from "$app/stores"
    import Login from "$lib/components/Login.svelte"
</script>

{#if $page.data.session && !($page.data.session?.error === "RefreshAccessTokenError")}
  <!-- User is logged in -->
<SearchBar/>
<!-- {:else} -->
  <!-- <Login /> -->
<!-- {/if} -->

<!-- Loading content -->

<!-- body wrapper -->
<div class="w-full relative pt-[175px] min-h-screen pl-[20px]">
    <!-- grid wrapper -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
        <div class="blurback h-[200px] w-[200px] "></div>
        <div class="blurback h-[200px] w-[200px]"></div>
        <div class="blurback h-[200px] w-[200px]"></div>
        <div class="blurback h-[200px] w-[200px]"></div>
    </div>
</div>
{:else}
  <Login />
{/if}


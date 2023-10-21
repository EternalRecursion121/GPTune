<script>
  import { page } from "$app/stores"
  import Login from "$lib/components/Login.svelte"
</script>

{#if $page.data.session}
  <!-- User is logged in -->
{:else}
  <Login />
{/if}
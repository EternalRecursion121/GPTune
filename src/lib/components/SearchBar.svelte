<script lang="js">
    import MusicIcon from "../assets/icons/MusicIcon.svelte";
import SearchIcon from "../assets/icons/SearchIcon.svelte";
    let loadPlaylistLabel;
    let searchBar;
    let searchActiveStyles = {
        top: '20px',
        left: '20px',
        transform: 'translate(0%, 0%)'
    }
    function handleSubmit(e) {
        e.preventDefault();
        Object.assign(searchBar.style, searchActiveStyles)
        loadPlaylistLabel.style.display = "none";
    }
</script>

<!--Searchbar Wrapper-->
<form bind:this={searchBar} on:submit={handleSubmit} class="flex duration-500 ease left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-between items-center fixed min-w-[300px] w-[90%] text-[12.5px] z-[100] text-text max-w-[750px]">
    <!--Search input-->
    <input placeholder="What would you like to listen to?" class="flex justify-between items-center md:text-2xl pl-[40px] md:pl-[60px] px-[20px] py-[10px] rounded-xl backdrop-blur-xl blurback  w-full relative">
    <!--search icon-->
    <SearchIcon />
    <!--load playlist icon-->
    <a class="absolute right-1 md:right-[6px] border-[0.75px] border-border rounded-lg w-[30px] sm:w-auto h-[30px] md:h-[40px] flex justify-center items-center" href=".">
        <p bind:this={loadPlaylistLabel} class="hidden sm:block ml-[10px] md:ml-[15px] md:text-[20px]">Load Playlist</p>
        <MusicIcon />
    </a>
</form>


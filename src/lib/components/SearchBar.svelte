<script lang="js">
    let searchBar;
    let searchActiveStyles = {
        top: '20px',
        left: '0px',
        transform: 'scale(0.8)'
    }
    function handleSubmit(e) {
        e.preventDefault();
        Object.assign(searchBar.style, searchActiveStyles)
    }
</script>

<!--Searchbar Wrapper-->
<form bind:this={searchBar} on:submit={handleSubmit} class="flex duration-200 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 justify-between items-center fixed min-w-[300px] w-[90%] text-[12.5px] z-[100] text-text max-w-[750px]">
    <!--Search input-->
    <input placeholder="What would you like to listen to?" class="flex justify-between items-center md:text-2xl pl-[40px] md:pl-[60px] px-[20px] py-[10px] rounded-xl backdrop-blur-xl blurback  w-full relative">
    <!--search icon-->
    <img class="absolute z-[10] w-4 md:w-6 ml-[10px] md:ml-[15px]" alt="search icon" src="src\lib\assets\icons\search-icon.svg"/>
    <!--load playlist icon-->
    <a class="absolute right-1 md:right-[6px] border-[0.75px] border-border rounded-lg w-[30px] sm:w-auto h-[30px] md:h-[40px] flex justify-center items-center" href=".">
        <p class="hidden sm:block mx-[10px] md:mx-[15px] md:text-[20px]">Load Playlist</p>
        <img class="w-3 sm:mr-[10px] md:w-5" src="src\lib\assets\icons\music-icon.svg" alt="music icon">
    </a>
</form>


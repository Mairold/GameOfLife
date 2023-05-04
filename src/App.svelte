<script>

import Header from "./lib/Header.svelte";
import Game from "./lib/Game.svelte";
import Footer from "./lib/Footer.svelte";

let game
</script>

<main>
    <Header />
    <Game bind:this={game} />
    <Footer on:toggle={game.toggleCellState} on:clear={game.clear}/>
</main>

<style>
</style>

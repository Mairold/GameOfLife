<script>

    import Header from "./lib/Header.svelte";
    import Game from "./lib/Game.svelte";
    import Footer from "./lib/Footer.svelte";
    import Badges from "./lib/Badges.svelte";

    let game
    let badges

     function runOneCycle() {
         game.toggleCellState()
         badges.checkPatterns()
    }
</script>

<main>
    <Header/>
    <div class="gameBoard">
        <Game bind:this={game}/>
        <Badges bind:this={badges} on:pattern={game.highlightPattern}/>
    </div>
    <Footer on:toggle={runOneCycle} on:clear={game.clear}/>
</main>

<style>

    .gameBoard {
        border: #617A55 solid 2px;
        width: 100%;
        flex: 6;
        display: flex;

    }
</style>

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
    <div class="header">
        <Header/>
    </div>
    <div class="gameSection">
        <Game bind:this={game}/>
        <Badges bind:this={badges} on:pattern={game.highlightPattern}/>
    </div>
    <div class="footer">
        <Footer on:toggle={runOneCycle} on:clear={game.clear}/>
    </div>
</main>

<style>

    .footer {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .header {
        flex: 1;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .gameSection {
        border: #617A55 solid 2px;
        width: 100%;
        flex: 6;
        display: flex;

    }
</style>

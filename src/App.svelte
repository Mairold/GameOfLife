<script>

    import Header from "./lib/Header.svelte";
    import Footer from "./lib/Footer.svelte";
    import Game from "./lib/Game.svelte";

    let game

</script>

<main>
    <div class="header">
        <Header/>
    </div>
    <div class="gameSection">
        <Game bind:this={game}></Game>
    </div>
    <div class="footer">
        <Footer on:toggle={game.runOneIteration} on:clear={game.clearGameState}/>
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
        flex: 6;
        display: flex;
    }
</style>

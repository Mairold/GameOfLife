<script>

    import Header from "./lib/Header.svelte";
    import Footer from "./lib/Footer.svelte";
    import Game from "./lib/Game.svelte";

    let game
    let footer

</script>

<main>
    <div class="header">
        <Header/>
    </div>
    <div class="gameSection">
        <Game bind:this={game} on:stopIteration={footer.stopCycle}></Game>
    </div>
    <div class="footer">
        <Footer bind:this={footer}
                bind:game>

        </Footer>
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

<script>

    import {onMount} from "svelte";

    let gameGrid = []
    let gameBoard

    function calculateGameBoard() {
        let rows = Math.floor(gameBoard.offsetWidth / 20)
        let columns = Math.floor(gameBoard.offsetHeight / 20)
        gameGrid = Array.from({length: (rows * columns)}, (v, i) => i)
    }

    onresize = calculateGameBoard
    onMount(() => calculateGameBoard())

    function setCellAlive(e) {
        document.getElementById(e.target.id).classList.toggle('cheese')
        // document.getElementById(e.target.id).classList.toggle('cell')
    }

</script>
<div class="div">
    <div bind:this={gameBoard} class="gameBoard">
        {#each gameGrid as cell}
            <div id="{'cell' + cell}" on:click={setCellAlive} class="cell cheese"></div>
        {/each}
    </div>
</div>

<style>
    .div {
        border: #1a1a1a solid 2px;
        width: 100%;
        flex: 6;
        padding: 2%;

    }

    .gameBoard {
        display: grid;
        grid-template: repeat(auto-fill, 20px) / repeat(auto-fill, 20px);
        width: 90%;
        height: 100%;
    }

    .cell {
        border: #FFF8D6 solid 0.01rem;
        background-color: #A4D0A4;
    }

    .cheese {
        background-color: #F7E1AE;
        z-index: 1;
    }
</style>
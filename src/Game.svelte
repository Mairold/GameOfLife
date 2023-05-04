<script>

    import {onMount} from "svelte";

    let gameBoard
    let rows = []
    let columns = []

    function calculateGameBoard() {
        columns = Array.from({length: (Math.floor(gameBoard.offsetWidth / 20))}, (v, i) => i + 1)
        rows = Array.from({length: (Math.floor(gameBoard.offsetHeight / 20))}, (v, i) => i + 1)
    }

    function setCellAlive(e) {
        document.getElementById(e.target.id).classList.toggle('alive')
    }

    onresize = calculateGameBoard
    onMount(() => calculateGameBoard())

</script>
<div class="div">
    <table bind:this={gameBoard} class="gameBoard">
        {#each rows as row (row)}
            <tr>
                {#each columns as column}
                    <td id="{row + '_' + column}" on:click={setCellAlive} class="cell alive"></td>
                {/each}
            </tr>
        {/each}
    </table>
</div>

<style>
    .div {
        border: #1a1a1a solid 2px;
        width: 100%;
        flex: 6;
        padding: 2%;
    }

    .gameBoard {
        display: block;
        width: 90%;
        height: 99%;
    }

    .cell {
        background-color: #A4D0A4;
        border: #FFF8D6 solid 0.01rem;
        height: 20px;
        width: 20px;
    }

    .alive {
        background-color: #F7E1AE;
    }
</style>
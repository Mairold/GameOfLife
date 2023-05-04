<script>

    import {onMount} from "svelte";
    import {keepAliveCells, toggleCells} from "./cellsStore.js";

    let gameBoard
    let rows = []
    let columns = []


    function calculateGameBoard() {
        columns = Array.from({length: (Math.floor(gameBoard.offsetWidth / 20))}, (v, i) => i + 1)
        rows = Array.from({length: (Math.floor(gameBoard.offsetHeight / 20))}, (v, i) => i + 1)
    }

    function toggleCell(e) {
        let selectedCell = e.target.id;
        document.getElementById(selectedCell).classList.toggle('alive')
        switchCellState(selectedCell);
    }

    function switchCellState(selectedCell) {
        if ($keepAliveCells.includes(selectedCell)) {
            $keepAliveCells = $keepAliveCells.filter(cell => cell !== selectedCell)
        } else {
            $keepAliveCells.push(selectedCell)
        }
    }

  export function toggleCellState() {
        for (let cell of $toggleCells) {
            document.getElementById(cell).classList.toggle('alive')
        }
        $toggleCells = []
    }

    export function clear() {
        for (let cell of $keepAliveCells) {
            document.getElementById(cell).classList.toggle('alive')
        }
        $keepAliveCells = []
        $toggleCells = []
    }

    onresize = calculateGameBoard
    onMount(() => calculateGameBoard())

</script>
<div class="div">
    <table bind:this={gameBoard} class="gameBoard">
        {#each rows as row (row)}
            <tr>
                {#each columns as column}
                    <td id="{row + '_' + column}" on:click={toggleCell} class="cell alive"></td>
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
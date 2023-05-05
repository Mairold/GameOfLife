<script>

    import {onMount} from "svelte";
    import {boardColumns, boardRows, keepAliveCells, toggleCells} from "./cellsStore.js";

    let gameBoard
    let rows = []
    let columns = []


    function calculateGameBoard() {
        columns = Array.from({length: (Math.floor(gameBoard.offsetWidth / 20))}, (v, i) => i)
        rows = Array.from({length: (Math.floor(gameBoard.offsetHeight / 20))}, (v, i) => i)
        $boardColumns = columns
        $boardRows = rows
    }

    function toggleCell(e) {
        let selectedCell = e.target.id;
        document.getElementById(selectedCell).classList.toggle('dead')
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
            document.getElementById(cell).classList.toggle('dead')
        }
        $toggleCells = []
    }

    export function clear() {
        for (let cell of $keepAliveCells) {
            document.getElementById(cell).classList.toggle('dead')
        }
        $keepAliveCells = []
        $toggleCells = []
    }

    export function highlightPattern(e) {
        console.log('pattern is ' + e.detail)
        for (let cell of e.detail) {
            document.getElementById(cell).classList.toggle('highlight')
            setTimeout(() => document.getElementById(cell).classList.toggle('highlight'),500)
        }
    }

    onresize = calculateGameBoard
    onMount(() => calculateGameBoard())


</script>
<div class="div">
    <table bind:this={gameBoard} class="gameBoard">
        {#each rows as row (row)}
            <tr>
                {#each columns as column}
                    <td id="{row + '_' + column}" on:click={toggleCell} class="cell dead alive"></td>
                {/each}
            </tr>
        {/each}
    </table>
</div>

<style>
    .div {
        width: 100%;
        flex: 8;
        padding: 2%;
    }

    .gameBoard {
        display: block;
        width: 99%;
        height: 99%;
    }

    .cell {
        border: #FFF8D6 solid 0.01rem;
        height: 20px;
        width: 20px;
    }

    :global(.highlight) {
        background-color: #646cff !important ;
    }

    .alive {
        background-color: #A4D0A4;
    }

    .dead {
        background-color: #F7E1AE;
    }
</style>
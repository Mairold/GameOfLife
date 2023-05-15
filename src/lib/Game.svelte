<script>

    import {onMount} from "svelte";
    import {keepAliveCells} from "./cellsStore.js";
    import {checkCells} from "./MainLogic.js";

    let gameBoard
    let rows = []
    let columns = []
    let changedCells


    function calculateGameBoard() {
        columns = Array.from({length: (Math.floor(gameBoard.offsetWidth / 20))}, (v, i) => i)
        rows = Array.from({length: (Math.floor(gameBoard.offsetHeight / 20))}, (v, i) => i)
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
      let processedCells = checkCells($keepAliveCells, rows.length, columns.length)
      $keepAliveCells = processedCells.keepAliveCells
      changedCells = processedCells.toggleCells
        for (let cell of changedCells) {
            document.getElementById(cell).classList.toggle('dead')
        }
        changedCells = []
    }

    export function clear() {
        for (let cell of $keepAliveCells) {
            document.getElementById(cell).classList.toggle('dead')
        }
        $keepAliveCells = []
        changedCells = []
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
<div class="badgesSection">
    <table bind:this={gameBoard} class="gameSection">
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
    .badgesSection {
        width: 100%;
        flex: 8;
        padding: 2%;
    }

    .gameSection {
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
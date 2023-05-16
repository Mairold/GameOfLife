<script>

    import {aliveCells} from "./cellsStore.js";
    import {checkCells} from "./MainLogic.js";
    import {onMount} from "svelte";
    import {getCellToCheck} from "./PatternCheckLogic.js";

    let gameBoard
    let rows = []
    let columns = []
    let highlightedPattern = []
    let changedCells
    export let simpleElement

    function calculateGameBoard() {
        columns = Array.from({length: (Math.floor(gameBoard.offsetWidth / 20))}, (v, i) => i)
        rows = Array.from({length: (Math.floor(gameBoard.offsetHeight / 20))}, (v, i) => i)
    }

    function toggleCell(e) {
        let selectedCell = e.target.id
        if (simpleElement.placeElement) {
            for ( let addend of simpleElement.elementPattern) {
                let cell = getCellToCheck(selectedCell,addend)
                document.getElementById(cell).classList.toggle('dead')
                changeAliveCells(cell)
            }
        } else {
            document.getElementById(selectedCell).classList.toggle('dead')
            changeAliveCells(selectedCell)
        }
        simpleElement.placeElement = false
    }

    function changeAliveCells(selectedCell) {
        if ($aliveCells.includes(selectedCell)) {
            $aliveCells = $aliveCells.filter(cell => cell !== selectedCell)
        } else {
            $aliveCells.push(selectedCell)
        }
    }

    export function oneIteration() {
        toggleBadgePattern()
        updateAliveCells();
        for (let cell of changedCells) {
            document.getElementById(cell).classList.toggle('dead')
        }
        changedCells = []
        highlightedPattern = []
    }

    export function toggleBadgePattern(e) {
        if (e) {
            highlightedPattern = e.detail
        }
        if (highlightedPattern.length > 0) {
            for (let cell of highlightedPattern) {
                document.getElementById(cell).classList.toggle('highlight')
            }
        }
    }

    function updateAliveCells() {
        let processedCells = checkCells($aliveCells, rows.length, columns.length)
        $aliveCells = processedCells.keepAliveCells
        changedCells = processedCells.toggleCells
    }

    export function clearGameBoard() {
        for (let cell of $aliveCells) {
            document.getElementById(cell).classList.toggle('dead')
        }
        $aliveCells = []
        changedCells = []

        for (let cell of highlightedPattern) {
            document.getElementById(cell).classList.toggle('highlight')
        }
        highlightedPattern = []
    }

    onresize = calculateGameBoard
    onMount(() => calculateGameBoard())

</script>

<div class="gameSection">
    <table bind:this={gameBoard} class="gameBoard">
        {#each rows as row (row)}
            <tr>
                {#each columns as column (column)}
                    <td id="{row + '_' + column}" on:click={toggleCell} class="cell dead alive"></td>
                {/each}
            </tr>
        {/each}
    </table>
</div>

<style>
    .gameSection {
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
        background-color: #646cff !important;
    }

    .alive {
        background-color: #A4D0A4;
    }

    .dead {
        background-color: #F7E1AE;
    }
</style>
<script>
    import {checkCells} from "./MainLogic.js";
    import {boardColumns, boardRows, keepAliveCells, toggleCells} from "./cellsStore.js";
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher()
    let interval
    let intervalSpeed = 5;

    function clearGameBoard() {
        dispatch('clear')
        clearInterval(interval)

    }

    function iterateCycle() {
        let processedCells = checkCells($keepAliveCells, $boardRows.length, $boardColumns.length)
        $keepAliveCells = processedCells.keepAliveCells
        $toggleCells = processedCells.toggleCells
        dispatch('toggle')

    }

    function play() {
        stop()
            interval = setInterval(iterateCycle, intervalSpeed * 100)
        console.log('interval is ' + interval)
    }

    function stop() {
        clearInterval(interval)
    }

    function changeIntervalSpeed() {
        play()
    }

</script>
<div class="div">
    <button on:click={iterateCycle}> Iterate</button>
    <button on:click={play}> play</button>
    <button on:click={stop}> stop</button>
    <button on:click={clearGameBoard}> clear</button>
    <div class="speedSelector">
        <label for="speedOfLife">Cycle Speed</label>
        <input id="speedOfLife" type="range" min="1" max="10" bind:value={intervalSpeed}
               on:change={changeIntervalSpeed}>
    </div>
</div>

<style>

    .div {
        flex: 1;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .speedSelector {
        flex-flow: column;
        display: flex;
    }

</style>
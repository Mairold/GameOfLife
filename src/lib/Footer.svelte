<script>
import {checkCells} from "./MainLogic.js";
import {keepAliveCells, toggleCells} from "./cellsStore.js";
import {createEventDispatcher} from "svelte";

const dispatch = createEventDispatcher()
let interval
let intervalSpeed = 5;
function clearGameBoard() {
    dispatch('clear')
    clearInterval(interval)

}
function iterateCycle() {
    let processedCells = checkCells($keepAliveCells)
    $keepAliveCells = processedCells.keepAliveCells
    $toggleCells = processedCells.toggleCells
    dispatch('toggle')

}
function play() {
    interval = setInterval(iterateCycle,intervalSpeed * 100)
}
function stop() {
    clearInterval(interval)
}

function changeIntervalSpeed() {
    stop()
    play()
}

</script>
<div class="div">
    <button on:click={iterateCycle}> Iterate </button>
    <button on:click={play}> play </button>
    <button on:click={stop}> stop </button>
    <button on:click={clearGameBoard}> clear </button>
    <input type="range" min="1" max="10" bind:value={intervalSpeed} on:change={changeIntervalSpeed}>
</div>

<style>

.div{
    border: #1a1a1a solid 2px;
    flex:1;
    align-items: center;
    display: flex;
    justify-content: center;
}

</style>
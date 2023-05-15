<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher()
    let interval
    let intervalSpeed = 5;

    function clearGameBoard() {
        stop()
        dispatch('clear')
    }

    function iterateCycle() {
        dispatch('toggle')
    }

    function play() {
        stop()
        interval = setInterval(iterateCycle, intervalSpeed * 100)
    }

    export function stop() {
        clearInterval(interval)
    }

</script>
<div class="controls">
    <button on:click={iterateCycle}> Iterate</button>
    <button on:click={play}> play</button>
    <button on:click={stop}> stop</button>
    <button on:click={clearGameBoard}> clear</button>
    <div class="cycleDurationSelector">
        <label for="cycleDuration">Cycle Duration</label>
        <input id="cycleDuration" type="range" min="1" max="10" bind:value={intervalSpeed} on:change={play}>
    </div>
</div>

<style>

    .controls{
        align-items: center;
        display: flex;
        justify-content: center;
    }


    .cycleDurationSelector {
        flex-flow: column;
        display: flex;
    }

</style>
<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher()

    export let game
    let intervalSpeed = 50

    function clearGameBoard() {
        game.clearGameState()
    }

    function iterate() {
        game.runOneIteration()
    }

    function playIterations() {
        game.playIterations(intervalSpeed)
    }
    function stopIterations() {
        game.stopIterations()
    }

    function placePattern() {
        game.placePattern()
    }

</script>

<div class="controls">
    <button on:click={iterate}> Iterate</button>
    <button on:click={playIterations}> play</button>
    <button on:click={stopIterations}> stop</button>
    <button on:click={clearGameBoard}> clear</button>
    <button on:click={placePattern}> Pattern</button>
    <div class="cycleDurationSelector">
        <label for="cycleDuration">Cycle Duration</label>
        <input id="cycleDuration" type="range" min="1" max="100" bind:value={intervalSpeed} on:change={playIterations}>
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
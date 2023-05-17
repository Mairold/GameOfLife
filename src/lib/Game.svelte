<script>

    import GameBoard from "./GameBoard.svelte";
    import Badges from "./Badges.svelte";

    let gameBoard
    let badges
    let simpleElement = {
        placeElement: false,
        elementPattern: ['-2_0', '-1_-1', '-1_+1', '0_-1', '0_+1', '+1_-1', '+1_+1', '+2_0']
    }
    let interval

    export function runOneIteration() {
        gameBoard.oneIteration()
        badges.checkPatterns()
    }

    export function clearGameState() {
        gameBoard.clearGameBoard()
    }

    export function playIterations(intervalSpeed) {
        stopIterations()
        interval = setInterval(runOneIteration, intervalSpeed * 10)
    }

    export function stopIterations() {
        console.log('before ' + interval)
        clearInterval(interval)
        console.log('after ' + interval)
    }

    export function placePattern() {
        simpleElement.placeElement = true
        console.log(simpleElement)
    }

</script>

<div class="game">
    <GameBoard bind:this={gameBoard} bind:simpleElement/>
    <Badges bind:this={badges} on:pattern={gameBoard.toggleBadgePattern} on:stopIteration={stopIterations}/>
</div>

<style>
    .game {
        width: 100%;
        display: flex;
    }
</style>
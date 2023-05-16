<script>

    import GameBoard from "./GameBoard.svelte";
    import Badges from "./Badges.svelte";

    let gameBoard
    let badges

    export function runOneIteration() {
        gameBoard.oneIteration()
        badges.checkPatterns()
    }

    export function clearGameState() {
        gameBoard.clearGameBoard()
    }

</script>

<div class="game">
    <GameBoard bind:this={gameBoard}/>
    <Badges bind:this={badges} on:pattern={gameBoard.toggleBadgePattern} on:stopIteration/>
</div>

<style>
    .game {
        width: 100%;
        display: flex;
    }

</style>
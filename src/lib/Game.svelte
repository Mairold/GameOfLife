<script>

    import GameBoard from "./GameBoard.svelte";
    import Badges from "./Badges.svelte";

    let gameBoard
    let badges
    let badgeName


    export function runOneIteration() {
        gameBoard.oneIteration()
        badges.checkPatterns()
            }

    export function clearGameState() {
        gameBoard.clear()
        badges.clearBadges()

    }

</script>

<div class="game">
    <GameBoard bind:this={gameBoard}/>
    <Badges bind:this={badges} on:pattern={gameBoard.toggleBadgePattern}/>
</div>

<style>
    .game {
        width: 100%;
        display: flex;
    }

</style>
<script>

 import {onMount} from "svelte";

 let gameGrid = []
 let height
 let width
 let gameBoard;

 function calculateGameBoard() {
     let rect = gameBoard.getBoundingClientRect();
     console.log('height' + height)
     console.log('height offset ' + rect.height)
     console.log('width ' + width)
     console.log('width offset ' + gameBoard.offsetWidth)
     let dividedWidth = Math.floor(gameBoard.offsetWidth / 20);
     let dividedHeight = Math.floor(gameBoard.offsetHeight / 20);
     console.log('divHeight ' + dividedHeight)
     console.log('divWidth ' + dividedWidth)
     let arrayLength = (dividedWidth * dividedHeight)
     console.log(arrayLength)
     gameGrid = Array(arrayLength)

     console.log(gameGrid.length)

 }
 onresize = calculateGameBoard
 onMount(() => calculateGameBoard())

</script>
<div class="div">
    <div bind:clientWidth={width} bind:clientHeight={height} bind:this={gameBoard} class="gameBoard">
        {#each gameGrid as e}
            <div class="box"></div>
        {/each}
    </div>

</div>

<style>
    .div {
        border: #1a1a1a solid 2px;
        width: 100%;
        flex: 6;
        padding: 2%;

    }

    .gameBoard {
        display: grid;
        grid-template: repeat(auto-fill,  20px) / repeat(auto-fill,  20px);
        width: 90%;
        height: 100%;
    }

    .box {
        border: rgb(183, 183, 187) solid 0.01rem  ;
        background-color: #949191;
    }
</style>
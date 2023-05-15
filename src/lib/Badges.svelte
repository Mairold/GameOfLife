<script>
    import {keepAliveCells} from "./cellsStore.js";
    import {checkPattern} from "./PatternCheckLogic.js";
    import {createEventDispatcher} from "svelte";

    let tub = false
    let angel = false
    let dispatch = createEventDispatcher()

    export function checkPatterns() {
        tub = checkSinglePattern(tub, 'tub');
        angel = checkSinglePattern(angel, 'angel');
    }

    function checkSinglePattern(badge, badgeName) {
        if (!badge) {
            let pattern = checkPattern($keepAliveCells, badgeName);
            if (pattern.length > 0) {
                dispatch('pattern', pattern)
                return true
            }
            return false
        }
        return true
    }

    export function clearBadges() {
        tub = false
        angel = false
    }

</script>

<div class="badgesSection">
    {#if tub}
        <img src="src/assets/Tub.png">
    {/if}
    {#if angel}
        <img src="src/assets/Angel.png">
    {/if}
</div>

<style>
    .badgesSection {
        border-left: #617A55 solid 2px;
        width: 100%;
        flex: 2;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 60px;
        height: 60px;
        margin-top: 2%;
        border-radius: 1px;
    }
</style>
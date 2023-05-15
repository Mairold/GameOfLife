<script>
    import {aliveCells} from "./cellsStore.js";
    import {checkPattern} from "./PatternCheckLogic.js";
    import {createEventDispatcher} from "svelte";
    import ModalBadge from "./ModalBadge.svelte";
    import { slide, scale, draw, crossfade , fly } from 'svelte/transition';
    import {linear} from "svelte/easing";

    let dispatch = createEventDispatcher()
    let cyclops = false
    let angel = false
    let showModal = false
    let badgeName;

    let imageSrc
    export function checkPatterns() {
        cyclops = cyclops ? true : checkSinglePattern(cyclops, 'cyclops')
        angel = angel ? true : checkSinglePattern(angel, 'angel')

    }
    function checkSinglePattern(badge, badgeName) {
        if (!badge) {
            let pattern = checkPattern($aliveCells, badgeName);
            if (pattern.length > 0) {
                dispatch('pattern', pattern)
                dispatch('stopIteration')
                return true
            }
            return false
        }
        return true

    }
    export function clearBadges() {
        cyclops = false
        angel = false

    }
    function showBadge(e) {
        showModal = true
        badgeName = e.target.id
        imageSrc = 'src/assets/' + badgeName + '_homm3.jpg'

    }

</script>

<div class="badgesSection">
    {#if cyclops}
        <img in:slide="{{ duration: 800, easing: linear }}" class="badgeImage" id="Cyclops" on:click={showBadge} src="src/assets/Cyclops_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 800, easing: linear }}" class="badgeImage" src="src/assets/Tub.png">
    {/if}
    {#if angel}
        <img in:slide="{{ duration: 500, easing: linear}}" class="badgeImage" id="Angel" on:click={showBadge} src="src/assets/Angel_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 500, easing: linear}}" class="badgeImage" src="src/assets/Angel.png">
    {/if}
</div>

<ModalBadge bind:showModal>
    <h2 slot="header">
        {badgeName}
    </h2>
    <img class="modalImage" src={imageSrc}>
</ModalBadge>


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
        border-radius: 0.2em;
    }

    .modalImage {
        height: 360px ;
        width: 100%;
        margin: 5%;
    }
</style>
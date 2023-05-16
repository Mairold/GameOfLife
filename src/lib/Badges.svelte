<script>
    import {aliveCells} from "./cellsStore.js";
    import {checkPattern} from "./PatternCheckLogic.js";
    import {createEventDispatcher} from "svelte";
    import ModalBadge from "./ModalBadge.svelte";
    import {slide} from 'svelte/transition';
    import {linear} from "svelte/easing";

    let dispatch = createEventDispatcher()
    let showModal = false
    let badgeName
    let imageSrc
    let badges = [
        {
            isFound: false,
            name: 'Angel'
        },
        {
            isFound: false,
            name: 'Power_Lich'
        },
        {
            isFound: false,
            name: 'Hydra'
        },
        {
            isFound: false,
            name: 'Basilisk'
        },
        {
            isFound: false,
            name: 'Centaur'
        },
        {
            isFound: false,
            name: 'Fairy_Dragon'
        },
        {
            isFound: false,
            name: 'Black_Dragon'
        },
        {
            isFound: false,
            name: 'Gryffin'
        },
        {
            isFound: false,
            name: 'Medusa'
        },
        {
            isFound: false,
            name: 'Phoenix'
        },
    ]

    export function checkPatterns() {
        for (let badge of badges) {
            if (!badge.isFound) {
                badge.isFound = checkSinglePattern(badge.name)
            }
        }
        badges = badges
    }

    function checkSinglePattern(badgeName) {
        let pattern = checkPattern($aliveCells, badgeName)
        if (pattern.length > 0) {
            dispatch('pattern', pattern)
            dispatch('stopIteration')
            return true
        }
        return false
    }

    function showBadge(e) {
        showModal = true
        badgeName = e.target.id
        imageSrc = 'src/assets/' + badgeName + '_homm3.jpg'
    }

</script>
<div class="badges">
    <div class="badgesSection">
        {#each badges as badge, i}
            {#if badge.isFound}
                <img in:slide="{{ duration: 800, easing: linear }}" class="badgeImage" style="grid-area: {(i % 5) + 1} / {(i % 2) + 1 }" id={badge.name}
                     on:click={showBadge}
                     src='src/assets/{badge.name}_homm3.jpg'>
            {:else}
                <img out:slide="{{ duration: 800, easing: linear }}" class="badgeImage" style="grid-area: {(i % 5) + 1} / {(i % 2) + 1 }"
                     src='src/assets/{badge.name}.png' on:click={() => console.log(badge.isFound)}>
            {/if}
        {/each}
    </div>
</div>

<ModalBadge bind:showModal>
    <h2 slot="header">
        {badgeName}
    </h2>
    <img class="modalImage" src={imageSrc}>
</ModalBadge>


<style>
    .badges {
        display: flex;
        justify-content: center;
    }

    .badgesSection {
        width: 100%;
        flex: 2;
        display: grid;
        padding: 30px;
        align-self: center;
    }

    img {
        width: 80px;
        height: 80px;
        padding: 4%;
        border-radius: 0.2em;
    }

    .modalImage {
        height: 360px;
        width: 100%;
        margin: 5%;
    }
</style>
<script>
    import {aliveCells} from "./cellsStore.js";
    import {checkPattern} from "./PatternCheckLogic.js";
    import {createEventDispatcher} from "svelte";
    import ModalBadge from "./ModalBadge.svelte";
    import {slide} from 'svelte/transition';
    import {linear} from "svelte/easing";

    let dispatch = createEventDispatcher()
    let angel = false
    let powerLich = false
    let hydra = false
    let basilisk = false
    let blackDragon = false
    let centaur = false
    let fairyDragon = false
    let gryffin = false
    let medusa = false
    let phoenix = false
    let showModal = false
    let badgeName

    let imageSrc

    export function checkPatterns() {
        angel = angel ? true : checkSinglePattern(angel, 'angel')
        powerLich = powerLich ? true : checkSinglePattern(powerLich, 'powerLich')
        hydra = hydra ? true : checkSinglePattern(hydra, 'hydra')
        basilisk = basilisk ? true : checkSinglePattern(basilisk, 'basilisk')
        blackDragon = blackDragon ? true : checkSinglePattern(blackDragon, 'blackDragon')
        centaur = centaur ? true : checkSinglePattern(centaur, 'centaur')
        fairyDragon = fairyDragon ? true : checkSinglePattern(fairyDragon, 'fairyDragon')
        gryffin = gryffin ? true : checkSinglePattern(gryffin, 'gryffin')
        medusa = medusa ? true : checkSinglePattern(medusa, 'medusa')
        phoenix = phoenix ? true : checkSinglePattern(phoenix, 'phoenix')
        hydra = hydra ? true : checkSinglePattern(hydra, 'hydra')
    }

    function checkSinglePattern(badge, badgeName) {
        if (!badge) {
            let pattern = checkPattern($aliveCells, badgeName)
            console.log(pattern)
            if (pattern.length > 0) {
                dispatch('pattern', pattern)
                dispatch('stopIteration')
                return true
            }
            return false
        }
        return true

    }

    function showBadge(e) {
        showModal = true
        badgeName = e.target.id
        imageSrc = 'src/assets/' + badgeName + '_homm3.jpg'

    }

</script>

<div class="badgesSection">
    {#if basilisk}
        <img in:slide="{{ duration: 800, easing: linear }}" class="badgeImage" id="Basilisk" on:click={showBadge}
             src="src/assets/Basilisk_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 800, easing: linear }}" class="badgeImage" src="src/assets/Basilik.png">
    {/if}
    {#if angel}
        <img in:slide="{{ duration: 500, easing: linear}}" class="badgeImage" id="Angel" on:click={showBadge}
             src="src/assets/Angel_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 500, easing: linear}}" class="badgeImage" src="src/assets/Angel.png">
    {/if}
    {#if powerLich}
        <img in:slide="{{ duration: 500, easing: linear}}" class="badgeImage" id="PowerLich" on:click={showBadge}
             src="src/assets/PowerLich_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 500, easing: linear}}" class="badgeImage" src="src/assets/PowerLich.png">
    {/if}
    {#if hydra}
        <img in:slide="{{ duration: 500, easing: linear}}" class="badgeImage" id="Hydra" on:click={showBadge}
             src="src/assets/Hydra_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 500, easing: linear}}" class="badgeImage" src="src/assets/Hydra.png">
    {/if}
    {#if blackDragon}
        <img in:slide="{{ duration: 500, easing: linear}}" class="badgeImage" id="BlackDragon" on:click={showBadge}
             src="src/assets/BlackDragon_homm3.png">
    {:else}
        <img out:slide="{{ duration: 500, easing: linear}}" class="badgeImage" src="src/assets/BlackDragon.png">
    {/if}
    {#if centaur}
        <img in:slide="{{ duration: 500, easing: linear}}" class="badgeImage" id="Centaur" on:click={showBadge}
             src="src/assets/Centaur_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 500, easing: linear}}" class="badgeImage" src="src/assets/Centaur.png">
    {/if}
    {#if fairyDragon}
        <img in:slide="{{ duration: 500, easing: linear}}" class="badgeImage" id="FairyDragon" on:click={showBadge}
             src="src/assets/FairyDragon_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 500, easing: linear}}" class="badgeImage" src="src/assets/FairyDragon.png">
    {/if}
    {#if gryffin}
        <img in:slide="{{ duration: 500, easing: linear}}" class="badgeImage" id="Gryffin" on:click={showBadge}
             src="src/assets/Gryffin_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 500, easing: linear}}" class="badgeImage" src="src/assets/Gryffin.png">
    {/if}
    {#if medusa}
        <img in:slide="{{ duration: 500, easing: linear}}" class="badgeImage" id="Medusa" on:click={showBadge}
             src="src/assets/Medusa_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 500, easing: linear}}" class="badgeImage" src="src/assets/Medusa.png">
    {/if}
    {#if phoenix}
        <img in:slide="{{ duration: 500, easing: linear}}" class="badgeImage" id="Phoenix" on:click={showBadge}
             src="src/assets/Phoenix_homm3.jpg">
    {:else}
        <img out:slide="{{ duration: 500, easing: linear}}" class="badgeImage" src="src/assets/Phoenix.png">
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
        height: 360px;
        width: 100%;
        margin: 5%;
    }
</style>
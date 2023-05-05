import {writable} from "svelte/store";

export let toggleCells = writable([])
export let keepAliveCells = writable([])
export let boardRows = writable([])
export let boardColumns = writable([])


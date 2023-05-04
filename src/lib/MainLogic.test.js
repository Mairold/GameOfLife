import {test, expect} from 'vitest'
import {checkCells} from "./MainLogic.js";


test('checkCellsBlinker', () => {
    let liveCells = ['2_2', '2_3', '2_4']
    let object = {
        'keepAliveCells': ['2_3', '1_3', '3_3'],
        'toggleCells': ['2_2', '2_4', '1_3', '3_3']
    }

    expect(checkCells(liveCells).toString()).equals(object.toString())
})
test('checkCellsBlinkerReverse', () => {
    let liveCells = ['1_3', '2_3', '3_3']
    let object = {
        'keepAliveCells': ['2_3', '2_2', '2_4'],
        'toggleCells': ['1_3', '3_3', '2_2', '2_4']
    }

    expect(checkCells(liveCells).toString()).equal(object.toString())
})



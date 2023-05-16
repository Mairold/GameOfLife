import {test, expect} from 'vitest'
import {checkPattern, getCellToCheck} from "./PatternCheckLogic.js";

test('checkPatternAngel', () => {
    let liveCells = ['0_3','4_4','3_8','5_2','5_3','5_5','5_7','5_6','6_3','6_5','7_4','5_4']
    expect(checkPattern(liveCells,'Angel').sort()).toEqual(['4_4','5_2','5_3','5_5','5_6','6_3','6_5','7_4'].sort())
})

test('checkPatternAngel_2', () => {
    let liveCells = ['3_2','5_6','3_6','6_3','6_5','7_4','6_6','4_4','5_2','7_2','5_3','5_5']
    expect(checkPattern(liveCells,'Angel').sort()).toEqual(['4_4','5_2','5_3','5_5','5_6','6_3','6_5','7_4'].sort())
})
test('checkFairyDragon', () => {
    let liveCells = ['3_2','2_5','2_9','3_6','1_5','4_3','4_6','7_7','5_3','5_4','5_5','6_2','6_6','5_3','5_5']
    expect(checkPattern(liveCells,'Fairy_Dragon').sort()).toEqual(['5_4','3_2','2_5','3_6','4_3','4_6','5_3','5_5','6_2','6_6'].sort())
})

test('checkPatternDoesNotMatch', () => {
    let liveCells = ['3_2','5_6','3_6','6_3','6_5','7_4','6_6','7_2','5_3','5_5']
    expect(checkPattern(liveCells,'Angel')).toEqual([])
})

test('getCellsToCheck', () => {
    expect(getCellToCheck('2_2','+1_+1')).equals('3_3')
})
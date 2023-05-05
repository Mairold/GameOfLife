import {test, expect} from 'vitest'
import {checkPattern} from "./PatternCheckLogic.js";

test('checkPatternTub', () => {
    let liveCells = ['1_1','0_2','1_3','2_2','2_4','5_5']
    expect(checkPattern(liveCells,'tub')).equals(true)
})

test('checkPatternTub_2', () => {
    let liveCells = ['4_4','1_3','3_3','2_4','4_2','5_3']
    expect(checkPattern(liveCells,'tub')).equals(true)
})

test('checkPatternAngel', () => {
    let liveCells = ['4_4','5_2','5_3','5_5','5_6','6_3','6_5','7_4']
    expect(checkPattern(liveCells,'angel')).equals(true)
})

test('checkPatternAngel_2', () => {
    let liveCells = ['3_2','5_6','3_6','6_3','6_5','7_4','6_6','4_4','5_2','7_2','5_3','5_5']
    expect(checkPattern(liveCells,'angel')).equals(true)
})
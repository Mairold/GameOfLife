let tub = ['-1_1', '0_2', '1_1']
let angel = ['+1_-2','+1_-1','+1_+1','+1_+2','+2_-1','+2_+1','+3_0',]

export function checkPattern(liveCells,badge) {
    switch (badge) {
        case ('tub') : return checkBadgePattern(liveCells,tub)
        case ('angel') : return checkBadgePattern(liveCells,angel)
    }
}

export function checkBadgePattern(liveCells,badge) {
    let pattern = []
    for (let cell of liveCells) {
        pattern.push(cell)
        for (let addend of badge) {
            let cellToCheck = getCellToCheck(cell, addend);
            if (!liveCells.includes(cellToCheck)) {
                break
            }
            pattern.push(cellToCheck)
            if (badge[badge.length - 1] === addend) return pattern
        }
        pattern = []
    }
    return []
}

function getCellToCheck(cell, addend) {
    let y = parseInt(cell.split('_')[0]) + parseInt(addend.split('_')[0])
    let x = parseInt(cell.split('_')[1]) + parseInt(addend.split('_')[1])
    return y + '_' + x;
}

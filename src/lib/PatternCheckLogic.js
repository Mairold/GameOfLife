let angel = ['+1_-2','+1_-1','+1_+1','+1_+2','+2_-1','+2_+1','+3_0']
let powerLich = ['-2_-1','-2_+1','-1_-2','-1_+2','0_-2','0_+2','+1_-1','+1_0','+1_+1','+2_0']
let hydra = ['-2_-2','-2_0','-2_+2','-1_-2','-1_0','-1_+2','0_-2','0_-1','0_+1','0_+2','+1_-1','+1_0','+1_+1']
let basilisk = ['-2_0','-2_+2','-1_+1','-1_+2','0_-2','0_-1','0_+1','0_+2','+1_-2','+1_0','+1_+2']
let blackDragon = ['-3_-2','-3_+1','-3_+2','-2_-2','-2_+1','-2_+2','-1_-1','-1_+1','0_-2','0_-1','0_+1','+1_-2','+1_+2']
let centaur = ['-2_0','-2_+1','-1_0','-1_+1','0_-1','0_+1','0_+2','+1_-2','+1_-1','0_+1','+2_-1']
let fairyDragon = ['-3_+1','-2_-2','-2_+2','-1_-1','-1_+2','0_-1','0_+1','+1_-2','+1_+2']
let gryffin = ['-2_+1','-2_+2','-1_-2','-1_+1','-1_+2','0_-1','0_+1','0_+2','+1_-1','+1_+2']
let medusa = ['-1_+1','0_+2','+1_-1','+1_+2','+2_-2','+2_+1','+2_+2','+3_-1','+3_0','+3_+1']
let phoenix = ['-2_-2','-2_+2','-1_-2','-1_+2','-1_0','0_-1','0_+1','+1_0','+2_0']




export function checkPattern(liveCells,badge) {
    switch (badge) {
        case ('angel') : return checkBadgePattern(liveCells,angel)
        case ('powerLich') : return checkBadgePattern(liveCells,powerLich)
        case ('hydra') : return checkBadgePattern(liveCells,hydra)
        case ('basilisk') : return checkBadgePattern(liveCells,basilisk)
        case ('blackDragon') : return checkBadgePattern(liveCells,blackDragon)
        case ('centaur') : return checkBadgePattern(liveCells,centaur)
        case ('fairyDragon') : return checkBadgePattern(liveCells,fairyDragon)
        case ('gryffin') : return checkBadgePattern(liveCells,gryffin)
        case ('medusa') : return checkBadgePattern(liveCells,medusa)
        case ('phoenix') : return checkBadgePattern(liveCells,phoenix)
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

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
        case ('Angel') : return checkBadgePattern(liveCells,angel)
        case ('Power_Lich') : return checkBadgePattern(liveCells,powerLich)
        case ('Hydra') : return checkBadgePattern(liveCells,hydra)
        case ('Basilisk') : return checkBadgePattern(liveCells,basilisk)
        case ('Black_Dragon') : return checkBadgePattern(liveCells,blackDragon)
        case ('Centaur') : return checkBadgePattern(liveCells,centaur)
        case ('Fairy_Dragon') : return checkBadgePattern(liveCells,fairyDragon)
        case ('Gryffin') : return checkBadgePattern(liveCells,gryffin)
        case ('Medusa') : return checkBadgePattern(liveCells,medusa)
        case ('Phoenix') : return checkBadgePattern(liveCells,phoenix)
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

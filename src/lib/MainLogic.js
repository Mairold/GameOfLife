let processedCells = {
    'keepAliveCells': [],
    'toggleCells': []
}

export function checkCells(liveCells, boardHeight, boardWidth) {
    processedCells.keepAliveCells = []
    processedCells.toggleCells = []
    let x
    let y
    let deadCellsWithLiveNeighbours = []
    for (let cell of liveCells) {
        y = parseInt(cell.split('_')[0])
        x = parseInt(cell.split('_')[1])

        let count = 0
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (!(i === 0 && j === 0)) {
                    let cell = (((y + i + boardHeight) % boardHeight) + '_' + ((x + j + boardWidth) % boardWidth))
                    if (liveCells.includes(cell)) {
                        count++
                    } else {
                        deadCellsWithLiveNeighbours.push(cell)
                    }
                }
            }
        }
        sortLiveCells(count, cell)
    }
    sortDeadCells(deadCellsWithLiveNeighbours)
    return processedCells
}


function sortLiveCells(count, cell) {
    if ((count === 2 || count === 3) && !processedCells.keepAliveCells.includes(cell)) {
        processedCells.keepAliveCells.push(cell)
    } else {
        processedCells.toggleCells.push(cell)
    }
}


function sortDeadCells(deadCellsWithLiveNeighbours) {
    let uniqueValues = [...new Set(deadCellsWithLiveNeighbours)]
    for (let deadCell of uniqueValues) {
        let size = deadCellsWithLiveNeighbours.filter(element => element === deadCell).length
        if (size === 3) {
            processedCells.keepAliveCells.push(deadCell)
            processedCells.toggleCells.push(deadCell)
        }
    }
}


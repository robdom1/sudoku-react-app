function createBaseSudoku() {
    const base = Array.from({ length: 9 }, () => Array(9).fill(0));

    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const cols = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const n = 3;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const row = rows[i];
            const col = cols[j];
            const num = nums[n * i + j];
            for (let r = 0; r < n; r++) {
                for (let c = 0; c < n; c++) {
                    base[row[r]][col[c]] = (num + r * n + c) % 9 + 1;
                }
            }
        }
    }
    return base;
}

function permuteRows(base) {
    const newBase = base.map(row => [...row]);
    for (let i = 0; i < 3; i++) {
        const rows = [3 * i, 3 * i + 1, 3 * i + 2];
        shuffle(rows);
        for (let j = 0; j < 3; j++) {
            newBase[3 * i + j] = base[rows[j]];
        }
    }
    return newBase;
}

function permuteColumns(base) {
    const newBase = Array.from({ length: 9 }, () => Array(9).fill(0));
    for (let i = 0; i < 3; i++) {
        const cols = [3 * i, 3 * i + 1, 3 * i + 2];
        shuffle(cols);
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 9; k++) {
                newBase[k][3 * i + j] = base[k][cols[j]];
            }
        }
    }
    return newBase;
}

function permuteBlocks(base) {
    const newBase = base.map(row => [...row]);
    const rowBlocks = [0, 1, 2];
    const colBlocks = [0, 1, 2];
    shuffle(rowBlocks);
    shuffle(colBlocks);
    
    const tempBase = base.map(row => [...row]);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    newBase[3 * i + r][3 * j + c] = tempBase[3 * rowBlocks[i] + r][3 * colBlocks[j] + c];
                }
            }
        }
    }
    return newBase;
}

function permuteNumbers(base) {
    const newBase = base.map(row => [...row]);
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffle(numbers);
    const mapping = {};
    for (let i = 0; i < 9; i++) {
        mapping[i + 1] = numbers[i];
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            newBase[i][j] = mapping[base[i][j]];
        }
    }
    return newBase;
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function randomizeSudoku(base) {
    base = permuteRows(base);
    base = permuteColumns(base);
    base = permuteBlocks(base);
    base = permuteNumbers(base);
    return base;
}

export function getSudoku(){
    // Generar y mostrar un Sudoku aleatorio
    var baseSudoku = createBaseSudoku();
    var randomSudoku = randomizeSudoku(baseSudoku);
    randomSudoku.forEach(row => console.log(row.join(' ')));
    return randomSudoku
}


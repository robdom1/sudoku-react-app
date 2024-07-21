export const codeToMatrix = (sdkCode) => {
    let matrix = []

    for(let i = 0; i < 81; i += 9){
        matrix.push(sdkCode.slice(i, i + 9).split(''))
    }

    return matrix;
}

export const matrixToCode = (sdkMatrix) => {
    return sdkMatrix == null ? "" : sdkMatrix.flat().map(e => e.val).join("");
}
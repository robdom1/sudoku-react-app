import { useContext, useEffect } from "react"
import { getSudoku } from "../services/sudokuService"
import { codeToMatrix, matrixToCode } from "../utils/utils"
import { useDiff } from "./useDiff"
import { useLoading } from "./useLoading"
import { SudokuContext } from "../contexts/Sudoku"



export const useBoard = () => {
    const { 
        emptyBoard,
        boardMatrix, setBoardMatrix, 
        boardQue, setBoardQue,
        boardRes, setBoardRes,
        error, setError,
        solved, setSolved,
    } = useContext(SudokuContext)

    const { isLoading , setIsLoading } = useLoading()
    const { difficulty } = useDiff()



    useEffect(() => {
        if(boardQue){
          let initializedMatrix = 
            codeToMatrix(boardQue).map((row, rowIdx) => 
                row.map((cell, colIdx) => 
                ({
                    row: rowIdx,
                    col: colIdx,
                    val: cell,
                    error: false,
                    disabled: !(cell == 0),
                    disableColor: "gray-500"
                })))
          console.log(initializedMatrix);
          setBoardMatrix(initializedMatrix)
        }
    },[boardQue])

    useEffect(()=>{
        if(isLoading){
            setBoardMatrix(emptyBoard)
        }
    },[isLoading])

    const getBoards = async () => {
        setIsLoading(true)
        let response = await getSudoku(difficulty)

        console.log(response)
        if(response){
            setBoardQue(response[0])
            setBoardRes(response[1])
        }
        setIsLoading(false)
        setError("")
        setSolved("")
    
    }

    const handleOnChangeValue = (rowIdx, colIdx, val) => {
        setBoardMatrix(board => 
            board.map((row) => row.map((cell) => {
                return cell.row == rowIdx && cell.col == colIdx ? 
                {...cell, val: val} 
                : cell
            }))
        )
    }

    const handleCheck = () => {
        let solvedMatrix = codeToMatrix(boardRes)
        setBoardMatrix(
          board => 
            board.map((row, rowIdx) => 
            row.map((cell, colIdx) => (
               {...cell, error: solvedMatrix[rowIdx][colIdx] !== cell.val}
            )
        )))
    
        let currBoardCode = matrixToCode(boardMatrix)
        console.log(currBoardCode);
        console.log(boardRes);
    
        if(currBoardCode !== boardRes){
          setError("Not Solved")
          setSolved("")
        }else{
          setError("")
          setSolved("Solved!!!")
        }
    }

    const handleSolve = () => {
        let solvedMatrix = codeToMatrix(boardRes)
        setBoardMatrix(
          board => 
            board.map((row, rowIdx) => 
            row.map((cell, colIdx) => (
              {...cell, val: solvedMatrix[rowIdx][colIdx], error: false}
            )
        )))
        setError("")
        setSolved("Solved!!!")
    }

    const handleReset = () => {
        let problemMatrix = codeToMatrix(boardQue)
        setBoardMatrix(
          board => 
            board.map((row, rowIdx) => 
            row.map((cell, colIdx) => (
              {...cell, val: problemMatrix[rowIdx][colIdx], error: false}
            )
        )))
        setError("")
        setSolved("")
    }

    return {
        boardMatrix, 
        setBoardMatrix, 
        getBoards, 
        handleOnChangeValue,
        handleCheck,
        handleSolve,
        handleReset,
        error,
        solved,
    }
}
import { useEffect, useState } from "react"
import Board from "./components/Board"
import { getSudoku } from "./services/sudokuService"
import { codeToMatrix, matrixToCode } from "./utils/utils"
import Status from "./components/Status"
import Button from "./components/Button"
import Header from "./components/Header"



function App() {
  const [boardQue, setBoardQue]       = useState(null)
  const [boardRes, setBoardRes]       = useState(null)
  const [boardMatrix, setBoardMatrix] = useState(null)
  const [error, setError]             = useState("")
  const [solved, setSolved]           = useState("")
  const [difficulty, setDiff]         = useState(0)
  const [isLoading, setIsLoading]     = useState(false)

  const diffOptionsList = [
    {val: 0, label: "Easy"},
    {val: 1, label: "Medium"},
    {val: 2, label: "Hard"},
  ]

  const getBoards = async () => {
    setIsLoading(true)
    let response = await getSudoku(difficulty)

    console.log(response)
    if(response){
      setBoardQue(response[0])
      setBoardRes(response[1])
    }
    setIsLoading(false)
    
  }

  useEffect(() => {
    if(boardQue){
      let initializedMatrix = codeToMatrix(boardQue).map((row, rowIdx) => row.map((cell, colIdx) => ({
        row: rowIdx,
        col: colIdx,
        val: cell,
        error: false,
        disabled: !(cell == 0),
        disableColor: "gray-400"
      })) )
      console.log(initializedMatrix);
      setBoardMatrix(initializedMatrix)
    }
  },[boardQue])

  const handleOnChangeValue = (rowIdx, colIdx, val) => {
    setBoardMatrix(board => 
      board.map((row) => row.map((cell) => {
        return cell.row == rowIdx && cell.col == colIdx ? {...cell, val: val} : cell
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
 

  return (
    <div className="flex flex-col justify-center items-center">

      <Header getBoards={getBoards} setDiff={setDiff} valList={diffOptionsList}/>
      
      <Board matrix={boardMatrix} isLoading={isLoading} onChange={handleOnChangeValue}/>

      <Status status={error}/>
      <Status status={solved}/>

      <div className="flex mt-2">
        <Button onClick={handleCheck}>Check</Button>
        <Button onClick={handleSolve}>Solve</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}

export default App

import { createContext } from "react";
import { useState } from "react"

export const SudokuContext = createContext();

export function SudokuProvider ({children}) {

    const emptyBoard =  [...Array(9)].map((_, rowIdx) => 
        [...Array(9)].map((_, colIdx) => (
          {
            row: rowIdx,
            col: colIdx,
            val: "0",
            error: false,
            disabled: true,
            disableColor: "white"
          }
        )))

    const [ boardQue, setBoardQue ] = useState(null)
    const [ boardRes, setBoardRes ] = useState(null)
    const [ boardMatrix, setBoardMatrix ] = useState(emptyBoard)
    const [ error, setError ] = useState("")
    const [ solved, setSolved ] = useState("")
    const [ difficulty, setDiff ] = useState(0)
    const [ isLoading, setIsLoading ] = useState(false)

    return (
        <SudokuContext.Provider value={{
            emptyBoard,
            isLoading, setIsLoading,
            difficulty, setDiff,
            boardMatrix, setBoardMatrix, 
            boardQue, setBoardQue,
            boardRes, setBoardRes,
            error, setError,
            solved, setSolved,
        }}>
            {children}
        </SudokuContext.Provider>
    )
}
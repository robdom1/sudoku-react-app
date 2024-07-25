import { createContext, useEffect } from "react";
import { useState } from "react"
import { usePersistentState } from "../hooks/usePersistentState";

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

    const [ boardQue, setBoardQue ] = usePersistentState("boardQue", null)
    const [ boardRes, setBoardRes ] = usePersistentState("boardRes", null)
    const [ boardMatrix, setBoardMatrix ] = usePersistentState("board", emptyBoard)
    const [ error, setError ] = useState("")
    const [ solved, setSolved ] = useState("")
    const [ difficulty, setDiff ] = usePersistentState("diff", 0)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ draft, setDraft ] = useState(false)

    useEffect(()=>{
        if(isLoading){
            setBoardMatrix(emptyBoard)
        }
    },[isLoading])

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
            draft, setDraft,
        }}>
            {children}
        </SudokuContext.Provider>
    )
}
import { useContext } from "react"
import { SudokuContext } from "../contexts/Sudoku"

export const useDraft = ()=>{
    const {draft, setDraft} = useContext(SudokuContext)

    return {draft, setDraft}
}
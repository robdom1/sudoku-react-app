import { useContext } from "react"
import { SudokuContext } from "../contexts/Sudoku"

export const useDiff = () => {
    const {difficulty, setDiff} = useContext(SudokuContext)
    const diffOptionsList = [
        {val: 0, label: "Easy"},
        {val: 1, label: "Medium"},
        {val: 2, label: "Hard"},
    ]

    return {difficulty, setDiff, diffOptionsList}
}
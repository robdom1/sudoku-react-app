import { useContext } from "react"
import { SudokuContext } from "../contexts/Sudoku"

export const useLoading = () => {
    const {isLoading, setIsLoading} = useContext(SudokuContext)

    return {isLoading, setIsLoading}
}
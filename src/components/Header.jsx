import { useBoard } from "../hooks/useBoard"
import { useDiff } from "../hooks/useDiff"
import Button from "./Button"
import Select from "./Select"

const Header = () => {
    const { getBoards } = useBoard()
    const { difficulty, setDiff, diffOptionsList } = useDiff()

    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <h1>SUDOKU</h1>
            <div>
                <Button onClick={getBoards}>Generate Board</Button>
                <Select 
                    name={"Difficulty"} 
                    onChange={setDiff}
                    valList={diffOptionsList} 
                    value={difficulty}
                />
            </div>
        </div>
    )
}

export default Header
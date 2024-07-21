import Button from "./Button"
import Select from "./Select"

const Header = ({getBoards, setDiff, valList}) => {
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <h1>SUDOKU</h1>
            <div>
                <Button onClick={getBoards}>Generate Board</Button>
                <Select name={"Difficulty"} onChange={setDiff} valList={valList} />
            </div>
        </div>
    )
}

export default Header
import Board from "./components/Board"
import Status from "./components/Status"
import Button from "./components/Button"
import Header from "./components/Header"
import { useBoard } from "./hooks/useBoard"



function App() {
  const {
    handleCheck,
    handleSolve,
    handleReset,
    error,
    solved
  } = useBoard()

  return (
    <div className="flex flex-col justify-center items-center">

      <Header/>
      
      <Board/>

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

import Board from "./components/Board"
import Status from "./components/Status"
import Button from "./components/Button"
import Header from "./components/Header"
import { useBoard } from "./hooks/useBoard"
import { useDraft } from "./hooks/useDraft"
import Toggle from "./components/Toggle"



function App() {
  const {
    handleCheck,
    handleSolve,
    handleReset,
    error,
    solved
  } = useBoard()

  const {draft, setDraft} = useDraft()

  return (
    <div className={`flex flex-col h-screen w-screen justify-center items-center bg-${solved === "" ? "" : "green-600"}`} >

      <Header/>
      
      <Status status={error}/>
      <Status status={solved}/>

      <Board/>

      <div className="flex mt-2">
        <Button onClick={handleCheck}>Check</Button>
        <Button onClick={handleSolve}>Solve</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>

      <Toggle onChange={setDraft} value={draft} label={"Draft Mode"}/>

    </div>
  )
}

export default App

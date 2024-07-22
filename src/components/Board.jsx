import PulseLoader from "react-spinners/PulseLoader";
import { useBoard } from "../hooks/useBoard";
import { useLoading } from "../hooks/useLoading";

function Board() {

  const { boardMatrix, handleOnChangeValue } = useBoard()
  const { isLoading } = useLoading()

    return(
      <>
        <PulseLoader  className="absolute opacity-100" loading={isLoading}/>
        <div className={`border-4 border-gray-800 ${isLoading ? "opacity-50" :""}`}>
          
          {boardMatrix.map((row, idx) => (
            <div key={idx} className={`grid grid-cols-9`}>
              {row.map((cell, idx) => {
                
                let rowBorders = cell.row == 2 || cell.row == 5 ? "border-b-4" : ""
                let colBorders = cell.col == 2 || cell.col == 5 ? "border-r-4" : ""
                
                return (
              
                  <input
                    key={idx} 
                    className={`border ${rowBorders} ${colBorders} border-gray-800 text-center w-12 h-12 text-2xl bg-${cell.error ? "red-500" : "white"} disabled:bg-${cell.disableColor}`} 
                    type="text" 
                    value={cell.val == 0 ? "" : cell.val}
                    disabled={cell.disabled}
                    onChange={e => handleOnChangeValue(cell.row, cell.col, e.target.value)}
                    
                  />
          
              )})}
            </div>
          ))}


        </div>
      </>
    )
}

export default Board
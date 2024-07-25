import PulseLoader from "react-spinners/PulseLoader";
import { useBoard } from "../hooks/useBoard";
import { useLoading } from "../hooks/useLoading";

function Board() {

  const { boardMatrix, handleOnChangeValue, solved, error } = useBoard()
  const { isLoading } = useLoading()

  const handleChange = (row, col, el) => {
    let newValue = el.target.value;
    if (newValue.length > 1) {
      newValue = newValue.slice(-1)[0];
    }
    handleOnChangeValue(row, col, newValue);
  };

    return(
      <>
        <PulseLoader  className="absolute z-20 opacity-100" loading={isLoading}/>
        <div className={`border-4 border-gray-800 ${isLoading || solved ? "opacity-50" :""} bg-white`}>
          
          {boardMatrix.map((row, idx) => (
            <div key={idx} className={`grid grid-cols-9`}>
              {row.map((cell, idx) => {
                
                let rowBorders = cell.row == 2 || cell.row == 5 ? "border-b-4" : ""
                let colBorders = cell.col == 2 || cell.col == 5 ? "border-r-4" : ""
                
                return (
              
                  <input
                    key={idx} 
                    className={`border ${rowBorders} ${colBorders} border-gray-800 text-center w-12 h-12 text-2xl ${cell.error ? "bg-red-500" : "bg-white"} disabled:bg-${cell.disableColor}`} 
                    type="number" 
                    // maxLength={1}
                    value={cell.val == 0 ? "" : cell.val}
                    disabled={cell.disabled || solved != ""}
                    // onChange={e => handleOnChangeValue(cell.row, cell.col, e.target.value)}
                    min="0" 
                    max="9" 
                    pattern="[0-9]"
                    onInput={e => handleChange(cell.row, cell.col, e)}
                    
                  />
          
              )})}
            </div>
          ))}


        </div>
      </>
    )
}

export default Board
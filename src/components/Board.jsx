import Row from "./Row"
import PulseLoader from "react-spinners/PulseLoader";


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

function Board({matrix, isLoading, onChange}) {


    if(matrix == null || isLoading){
      console.log(emptyBoard);
      matrix = emptyBoard 
    }
    
    return(
      <>
        <PulseLoader  className="absolute" loading={isLoading}/>
        <div className={`border-4 border-gray-800 ${isLoading && "opacity-75"}`}>
          
          {matrix.map((row, idx) => (
            
            <Row key={idx} row={row} onChange={onChange}/>
          
          ))}


        </div>
      </>
    )
}

export default Board
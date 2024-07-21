import Cell from "./Cell"

function Row({row, onChange}){

    return (
        <div className={`grid grid-cols-9`}>

            {row.map((cell, idx) => (
            
                <Cell key={idx} cell={cell} onChange={onChange}/>
          
            ))}

        </div>
    )
}

export default Row
function Cell({cell, onChange}){

    let rowBorders = cell.row == 2 || cell.row == 5 ? "border-b-4" : ""
    let colBorders = cell.col == 2 || cell.col == 5 ? "border-r-4" : ""

    return(
        <div>
            <input 
                className={`border ${rowBorders} ${colBorders} border-gray-800 text-center w-12 h-12 text-2xl bg-${cell.error ? "red-500" : "white"} disabled:bg-${cell.disableColor}`} 
                type="text" 
                value={cell.val == 0 ? "" : cell.val}
                disabled={cell.disabled}
                onChange={e => onChange(cell.row, cell.col, e.target.value)}
                
            />
        </div>
    )

}

export default Cell

// className="p-0 border-black border-0 border-t-2 text-center w-12 h-12 text-2xl bg-white outline-none disabled:bg-[#EEEEEE]"
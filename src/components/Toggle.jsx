
const Toggle = ({value, onChange, label}) => {    
    return (
        <label className="flex justify-between items-center p-2 text-xl relative group">
            {label}
            <input type="checkbox" 
            value={value} 
            className="appearance-none peer absolute left-0 top-0 w-full h-full rounded-md"  
            onChange={e => onChange(e.target.checked)}/>
            <span className="w-14 h-8 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-700 rounded-full after:w-6 after:h-6 after:bg-white after:rounded-full after:shadow-md peer-checked:bg-green-400 duration-300 ease-in-out after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1 group-hover:peer-checked:after:translate-x-5"></span>
        </label>
    )
}

export default Toggle
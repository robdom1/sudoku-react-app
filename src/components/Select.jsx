const Select = ({name, onChange, valList}) => {
    return (
        <select 
          className="m-4 p-2 border-2 border-gray-400"
          name= {name}
          onChange={e => onChange(e.target.value)}>
            {valList.map(ele => (
                <option value={ele.val}>{ele.label}</option>
            ))}
        </select>
    )
}

export default Select
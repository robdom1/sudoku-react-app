const Select = ({name, onChange, valList, value}) => {
    return (
        <select 
          className="m-4 p-2 border-2 border-gray-400"
          name= {name}
          value={value}
          onChange={e => onChange(e.target.value)}>
            {valList.map(ele => (
                <option key={ele.val} value={ele.val}>{ele.label}</option>
            ))}
        </select>
    )
}

export default Select
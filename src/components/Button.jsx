const Button = ({onClick , children}) => {
    return (
        <button className="m-2 p-2 border-2 border-gray-400"
          onClick={onClick}>
           {children}
        </button>
    )
}

export default Button
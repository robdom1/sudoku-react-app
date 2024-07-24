const Button = ({onClick , children, addClass}) => {
    return (
        <button className={`m-2 p-2 border-2 bg-white border-gray-400 ${addClass}`}
          onClick={onClick}>
           {children}
        </button>
    )
}

export default Button
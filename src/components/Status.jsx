const Status = ({status}) =>{
    return (
        <>
            {status !== "" &&
                <p>{status}</p>
            }
        </>
    )
}

export default Status
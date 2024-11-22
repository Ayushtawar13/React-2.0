const Lists = () => {
    const arr = [1,2,3,4,5,6];
    return (
        <>
        {
            arr.map( (number) => (
                <ul key = {number} >
                    <li>
                        {number}
                    </li>
                </ul>
            ))
        }
        </>
    )
}

export default Lists;
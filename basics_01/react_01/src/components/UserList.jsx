const UserList = () =>{
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
      ];

    return (
        <>
            {
                users.map(
                    ({name , id , age }) => (
                        <ul key={Math.random()}>
                            <li>
                                Id : {id}
                            </li>
                            <li>
                                Name : {name}
                            </li>
                            <li>
                                Age : {age}
                            </li>
                        </ul>
                    )
                )
            }
        </>
    )
}

export default UserList;
const Greet = () => {
    const date1 =new  Date();
    const d = date1.toLocaleDateString();

    const name = "ayush";
    return (
        <div>
            <p>hello how are you {name}</p>
            <p>current date :- {d}</p>
        </div>
    )
}

export default Greet;
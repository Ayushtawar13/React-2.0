const Onclick = () => {

    const clickHandler = () => (console.log("button clicked "));
    const mouseHandler = () => (alert("mouse hoverring yeahh??"));
    const copyHandler = () => (alert("you are stealing my information buddy"));
    return (
        <>
        <button onClick={clickHandler}>Click</button>
        <p onCopy={copyHandler} onMouseOver={mouseHandler}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quae cum deserunt quod dignissimos quasi officiis ut exercitationem laudantium quas fugiat expedita est, aut beatae officia aspernatur, minus perferendis sint?</p>
        
        </>
    )
}
export default Onclick;
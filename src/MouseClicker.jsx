export function MouseClicker(){
    function handleButtonClick(event){
    console.log(event.currentTarget);
    }

    return (
    <>
    <button name="one" onClick = {handleButtonClick}> Click me </button>
    <button name="two" onClick = {handleButtonClick}> Click me </button>
    </>
    )
}
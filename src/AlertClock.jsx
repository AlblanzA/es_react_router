export function AlertClock(){
    function handleButtonClick(){
         
        //vsc code mi ha chiesto di diabilitare now perchè non era utilizzato
         
        const now = new Date()

        alert(`The current time is${now.toLocaleDateString()}` )
    }
    return (
        <div>
            <p>Click the button below to show the current time</p>
            <button onClick={handleButtonClick} > Click me ! </button>
        </div>
    )
}
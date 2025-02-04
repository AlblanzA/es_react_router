import { useEffect, useState } from "react"

export function Clock () {

    const [date, setDate] = useState (new Date ())

    useEffect(()=> {
      const IntervalId =  setInterval(()=>{
        console.log("updating date...");
        
        setDate(newDate())
    },1000 )
    
    return ()=> {
        console.log("Clearing clock interval");
        
        clearInterval(IntervalId)
    }
},[])

    return <div>
        <p> Current time :{date.toLocaleDateString()} </p>
    </div>
}
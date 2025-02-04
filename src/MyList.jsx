import{upState} from "react"

function MyList({item}){
 const [counter, setCounter] = userState(0)
    function handleIncrementCounter {
        setCounter(c -> c+ 1)
    }
    return (
       <li >
       <h4>{item.name}</h4>
       <p>{item.age}years old</p>
       <button  onClick={}{counter}></button>
       </li>
    )
}


export function MyList ( items ){

const names = ["James", "Jhon", "BIlly"]
// const items = names.maps(name-> <li>{name}</li>)
    return (
        <ul>
        {items.maps(item, index)-> (
        <MyList item = {item}/>
        )}
        </ul>
        )
    }
//non ho capito perchè piazza qui il nome del componente
//se facciamo il rendering all'interno del componente possiamo taggare altri componenti
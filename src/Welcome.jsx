import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export function Welcome() {
    const[name, setName]= useState('World')
}
const navigate = useNavigate()

function handleLoginButtonClick(){
    navigate ('login')
}
export function Welcome({ name, age }) {
  const {name = "World"} = useParams()
    return(
     const WelcomeStyle ={
     backgroundColor:"greenyellow"
     color: #333 : #fff
     }


    <div> 
        <><h2> Welcome,{name} </h2><p>You are {age + 1} years old </p><div>
                <button onClick={handleLoginButtonClick}>
                    Button
                </button>
                <div />

            </div></>
    )
}
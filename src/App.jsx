/* eslint-disable react/jsx-no-undef */
 
import { AlertClock } from "./AlertClock"
import { MouseClicker } from "./MouseClicker"
 
import { MyForm } from "./MyForm"
import { MyList } from "./MyList"
// eslint-disable-next-line no-unused-vars
import { MyUncontrolledForm } from "./MyUncontrolledForm"
import { Welcome } from "./Welcome"
import { LanguageContext } from "./LanguageContex"
import { useState } from "react"
import { GithubUser } from "./GithubUser"
import { Route } from "react-router-dom"

//compongo piu componenti, creo un componente che utilizza jsx 
//per eseguire il rendering di un altro componente 
//creo quindi un albero di componenti
export function App() {

    const [Language, setLanguage] = useState('en')

    function handleSetLanguage(language){
          setLanguage(language)
    }

    return (
        <Container title={<div>
            <h1>My Awesome App</h1>
             </div>}>
             <div>
                <Link to="/">Home</Link> 
                <Link to="products"> Products</Link>
             </div>
            <Routes>
                <Route path="/:name" element={<Welcome />}/>
                <Route path="products" element={<Catalogue/>} />
                  <Route index element = {<p>Please selecet a product</p>}/>
                 <Route path=":id" element={<Product/>} />
            </Routes>
            <Route path="*" element={<div> <p>Not found</p></div>}/>
            <Link to="/">Go Home</Link>
        </Container>

    )
}
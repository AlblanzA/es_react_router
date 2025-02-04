import { StrictMode } from "react"
import { App } from "./App"
//posso eliminare l'import di HelloWorld perchè adesso è un sottocomponente del componente App
// import {HelloWorld} from "./HelloWorld"
import {createRoot} from 'react-dom/client'

import"./index.scss"

// //collego ilcomponente
// const helloWorldElement = <HelloWorld/>

// //collego react all'html con il DOM
// const rootElement = document.getElementById('root')

// //creo una route per mostrare componenti DOM su browser (prima ho importato la root)
// const root = createRoot(rootElement)

// //utilizzo la radice con il comando .render per renderizzare l'elemento preso con il DOM
// root.render(HelloWorld)

//dopo 20 min sene è uscito che tutto questo processo è inutile e non va fatto così

//processo di creazione root che va creato una volta soltanto
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)

fetch ('https://api.github.com/users/AlblanzA')
.then(response => {
    console.log("status response :" + Response.status);
    
    return response.json()
})
.then ((json))=> {
    console.log(json);
}
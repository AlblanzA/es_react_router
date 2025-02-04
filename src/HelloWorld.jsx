import { useContext } from "react"
import { LanguageContext } from "./LanguageContex"

export function HelloWorld(){
const language = seContext(LanguageContext)

    return <h2> {language === 'en'? 'Hello, World' : 'Ciao, Mondo!'} </h2>
 }
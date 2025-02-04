import { useEffect, useState } from "react"

export function GithubUser({username}){
const [data,setData] = useState(null)
const [loading, setLoading]= useState(false)
const [error, setError] = useState(null)


async function fetchGithubUser(username) {
    setLoading(true)
    setError(null)
    try{
     const response=  await fetch (`https://api.github.com/$(username)`)
     if (!response.ok){
        throw new Error("user not found")}

     const json = await response.json()
     setData(json)
     
    } catch (error){
        setError(error)
        setData(null)
        
    } finally {
        setLoading(false)
    }
}

useEffect (()=>{
   fetchGithubUser(username)
},[username])

return <div>
  {loading && <h1>Loading...</h1>}  
  {error && <h1> The has been an error</h1>}
  {data && <h1>{data.login}</h1>}
</div>
}
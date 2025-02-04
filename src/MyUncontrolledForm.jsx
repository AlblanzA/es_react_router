//uncontrolledforms -->ovvero quando non ho bisogno che i gli input ed i moduli su DOM 
// appaiano in un modo specifico

export function MyUncontrolledForm(){
    function handleFormSubmit(event){
     event.preventDefault()

//accedere direttamente all'HTML all'internod della pagina
     const username =  event.target.element.namedItem('username').value
     const password =  event.target.element.namedItem('password').value
     const session =  event.target.element.namedItem('session').checked

     const data = {
        username,
        password,
        session
     }
      console.log(data);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h1> My Uncontrolled FOrm</h1>
            <input name="username"></input>
            <input name="password" type= "password" />
            <input name="session" type="checkbox"></input>
            <button>Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}
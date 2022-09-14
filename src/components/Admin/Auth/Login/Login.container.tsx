import { useState } from "react"
import Login from "./Login"

function LoginContainer () {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    let onLoginChange = (event: any) => {
        let value = event.target.value
        setLogin(value)
    }

    let onPasswordChange = (event: any) => {
        let value = event.target.value
        setPassword(value)
    }

    let data ={
        login,
        password,
        onLoginChange,
        onPasswordChange
    }

    return(
        <Login {...data}/>
    )
}

export default LoginContainer
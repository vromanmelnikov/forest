import { Form, Input } from "reactstrap"

import Class from './Login.module.css'

function Login(props) {

    return (
        <Form className={`${Class.form}`}>
            <h2>Авторизация</h2>
            <hr />
            <Input
                value={props.login}
                onChange={
                    (event) => {
                        props.onLoginChange(event)
                    }
                }
                placeholder='Логин'
                type="text"
            />
            <Input
                value={props.password}
                onChange={
                    (event) => {
                        props.onPasswordChange(event)
                    }
                }
                placeholder='Пароль'
                type="password"
            />
            <Input className={`${Class.button}`} type="submit" />
        </Form>
    )
}

export default Login
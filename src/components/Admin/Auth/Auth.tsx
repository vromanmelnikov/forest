import { Outlet } from 'react-router'

import Class from './Auth.module.css'

function Auth (props: any) {

    return(
        <div className={`${Class.Auth}`}>
            <Outlet />
        </div>
    )
}

export default Auth
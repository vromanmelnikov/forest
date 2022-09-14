import { Outlet } from "react-router"
import Footer from "../HOC/Footer/Footer"
import HeaderContainer from "../HOC/Header/Header.container"
import FeedbackContainer from '../HOC/Feedback/Feedback.container'

import Class from './System.module.css'

let System = (props) => {

    return (
        <div className={`${Class.System}`}>
            <HeaderContainer />
            <div className="">
                <Outlet />
            </div>
            <FeedbackContainer />
            <Footer />
        </div>
    )
}

export default System
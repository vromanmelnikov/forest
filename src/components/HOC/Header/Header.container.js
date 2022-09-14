import { useState } from "react"
import { useNavigate } from "react-router";
import Header from "./Header"

let HeaderContainer = (props) => {

    const [menu, setMenu] = useState(false);
    const navigate = useNavigate()

    let showMenu = () => {
        setMenu(!menu)
    }

    let goToMain = () => {
        navigate('/main')
    }

    let goToLink = (to) => {
        // console.log(to)
        navigate(to)
    }

    const data = {
        menu,
        showMenu,
        goToMain,
        goToLink
    }

    return (
        <Header {...data} />
    )
}

export default HeaderContainer
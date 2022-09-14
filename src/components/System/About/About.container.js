import { useEffect, useState } from "react"
import About from "./About"

let AboutContainer = (props) => {

    const [about, setAbout] = useState(false)

    useEffect(
        () => {
            if (props.info == undefined) {
                setAbout(true)
            }
            else {
                setAbout(false)
            }
        }, []
    )

    let data = {
        about
    }

    return (
        <About {...data}/>
    )
}

export default AboutContainer
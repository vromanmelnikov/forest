import { useEffect } from "react"
import GoodInfo from "./GoodInfo"

let GoodInfoContainer = (props) => {

    let closeGood = () => {
        props.closeGood()
    }

    useEffect(
        () => {
        }, [props.good]
    )

    let copyLink = () => {
        // console.log(window.location)
        navigator.clipboard.writeText(window.location.href)
    }

    let data = {
        ...props.good,
        setGood: props.setGood,
        closeGood,
        copyLink
    }

    return(
        <GoodInfo {...data}/>
    )
}

export default GoodInfoContainer
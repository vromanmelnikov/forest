import { useState } from "react"
import CarouselItemView from "./CarouselItem"

interface Props {
    photoUrl: string,
    animating: any,
    setAnimating: any,
    name: string,
    index: number
}

function CarouselItemContainer (props: Props) {

    const [loaded, setLoaded] = useState(false)

    let name = `${props.name}_${props.index}`

    let data = {
        animating: props.animating,
        setAnimating: props.setAnimating,
        photoUrl: props.photoUrl,
        loaded,
        setLoaded,
        name
    }

    return(
        <CarouselItemView {...data}/>
    )
}

export default CarouselItemContainer
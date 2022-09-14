import { useState } from "react"
import { CarouselCaption, CarouselItem } from "reactstrap"
import { API_URL, STATIC_URL } from "../../../../services/api.confige"
import Gallery from "./Gallery"

import Class from './Gallery.module.css'

function GalleryContainer(props) {

    const [active, setActive] = useState(0)
    const [animating, setAnimating] = useState(false)

    let next = () => {
        if (animating) return
        const nextIndex = active === props.gallery.length - 1 ? 0 : active + 1;
        setActive(nextIndex);
    }

    let previous = () => {
        if (animating) return
        const nextIndex = active === 0 ? props.gallery.length - 1 : active - 1;
        setActive(nextIndex);
    }

    let goToIndex = (index) => {
        if (animating) return
        setActive(index)
    }

    const slides = props.gallery.map(
        value => {
            const url = `${STATIC_URL}/gallery/${value.src}`
            return (
                <CarouselItem
                    key={value.key}
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}>
                    <div className={`${Class.block}`}>
                        <img src={url} className={`${Class.image}`} />
                    </div>
                </CarouselItem>
            )
        }
    )

    let data = {
        slides,
        active,
        gallery: props.gallery,
        next,
        previous,
        goToIndex,
        setAnimating
    }

    return (
        <Gallery {...data} />
    )
}

export default GalleryContainer
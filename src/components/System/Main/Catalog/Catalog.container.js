import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { CarouselCaption, CarouselItem } from "reactstrap"
import { API_URL, STATIC_URL } from "../../../../services/api.confige"
import Catalog from "./Catalog"

import Class from './Catalog.module.css'

function CatalorContainer(props) {

    const navigate = useNavigate()

    const categories = useSelector(
        state => state.categoriesData.list
    )

    const [active, setActive] = useState(0)
    const [animating, setAnimating] = useState(false)

    let next = () => {
        if (animating) return
        const nextIndex = active === categories.length - 1 ? 0 : active + 1;
        setActive(nextIndex);
    }

    let previous = () => {
        if (animating) return
        const nextIndex = active === 0 ? categories.length - 1 : active - 1;
        setActive(nextIndex);
    }

    let goToIndex = (index) => {
        if (animating) return
        setActive(index)
    }

    let goToRoute = (id) => {
        console.log(id)
        navigate('/shop?category=' + id)
    }

    const slides = categories.map(
        (value, index) => {
            console.log(value.photo)
            const url = `${STATIC_URL}/${value.photo}`
            return (
                <CarouselItem
                    key={index}
                    onExiting={() => setAnimating(true)}
                    onExited={() => setAnimating(false)}>
                    <div
                        className={`${Class.block}`}
                        onClick={
                            () => {
                                goToRoute(value.id)
                            }
                        }
                    >
                        <img src={url} className={`${Class.image}`} />
                        <CarouselCaption
                            captionHeader={value.name}
                            captionText={''}
                            className={`${Class.text}`}
                        />
                    </div>
                </CarouselItem>
            )
        }
    )

    let data = {
        slides,
        active,
        categories,
        next,
        previous,
        goToIndex,
        setAnimating
    }

    return (
        <Catalog {...data} />
    )
}

export default CatalorContainer
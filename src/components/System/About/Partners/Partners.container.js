import { useState } from "react";
import { useSelector } from "react-redux";
import { CarouselItem } from "reactstrap";
import Partners from "./Partners";

import Class from './Partners.module.css'

function PartnersContainer (props) {

    const partners = useSelector(
        state => state.partnersData.list
    )

    const [active, setActive] = useState(0)
    const [animating, setAnimating] = useState(false)

    let next = () => {
        if (animating) return
        const nextIndex = active === partners.length - 1 ? 0 : active + 1;
        setActive(nextIndex);
    }

    let previous = () => {
        if (animating) return
        const nextIndex = active === 0 ? partners.length - 1 : active - 1;
        setActive(nextIndex);
    }

    let goToIndex = (index) => {
        if (animating) return
        setActive(index)
    }

    const slides = partners.map(
        (value, index) => {
            let url = require(`../../../../assets/partners/${value.image}.png`)
            return (
                <CarouselItem
                    key={index}
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
        partners,
        slides,
        active,
        next,
        previous,
        goToIndex,
        setAnimating
    }

    return(
        <Partners {...data}/>
    )
}

export default PartnersContainer
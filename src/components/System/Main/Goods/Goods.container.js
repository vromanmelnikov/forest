import { useState } from "react"
import { useSelector } from "react-redux"
import { CarouselItem } from "reactstrap"
import { STATIC_URL } from "../../../../services/api.confige"
import Goods from "./Goods"

import Class from './Goods.module.css'

function GoodsContainer(props) {

    const goods = useSelector(
        state => state.goodsData
    )

    const [active, setActive] = useState(0)
    const [animating, setAnimating] = useState(false)

    let next = () => {
        if (animating) return
        const nextIndex = active === goods.length - 1 ? 0 : active + 1;
        setActive(nextIndex);
    }

    let previous = () => {
        if (animating) return
        const nextIndex = active === 0 ? goods.length - 1 : active - 1;
        setActive(nextIndex);
    }

    let goToIndex = (index) => {
        if (animating) return
        setActive(index)
    }

    const slides = goods.map(
        (value, index) => {
            let url = require('../../../../assets/photos/' + value.photo + '.png')
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
        slides,
        active,
        goods,
        next,
        previous,
        goToIndex,
        setAnimating
    }

    return (
        <Goods {...data}/>
    )
}

export default GoodsContainer
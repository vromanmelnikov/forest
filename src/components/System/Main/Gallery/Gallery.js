import { Carousel, CarouselControl, CarouselIndicators } from "reactstrap"

import Class from './Gallery.module.css'

function Gallery(props) {

    return (
        <Carousel
            activeIndex={props.active}
            next={props.next}
            previous={props.previous}
            className={`${Class.Carousel}`}
        >
            <CarouselIndicators
                items={props.gallery}
                activeIndex={props.active}
                onClickHandler={props.goToIndex}
            />
            {props.slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={props.previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={props.next}
            />
        </Carousel>
    )
}

export default Gallery
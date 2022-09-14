import { Carousel, CarouselControl, CarouselIndicators } from 'reactstrap'
import CatalogButtonContainer from '../CatalogButton/CatalogButton.contaier'
import Class from './Goods.module.css'

function Goods(props) {

    return (
        <>
            <Carousel
                activeIndex={props.active}
                next={props.next}
                previous={props.previous}
                className={`${Class.Carousel}`}
            >
                <CarouselIndicators
                    items={props.goods}
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
        </>
    )
}

export default Goods
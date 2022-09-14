import { CarouselItem } from "reactstrap"
import LoaderContainer from "../Loader/Loader.container"

import Class from './CarouselItem.module.css'

function CarouselItemView(props) {

    return (
        <CarouselItem
            id={props.name}
            onExiting={() => props.setAnimating(true)}
            onExited={() => props.setAnimating(false)}>
            <div className={`${Class.block}`}>
                {/* {
                    props.loaded == false
                    &&
                    <LoaderContainer width="100vw" height="100vh" color="white"/>
                }
                <img className={`${Class.image}`} src={props.photoUrl} onLoad={
                    () => {
                        props.setLoaded(true)
                    }
                }/> */}
                <LoaderContainer width="100vw" height="100vh" color="white" />
            </div>
        </CarouselItem>
    )
}

export default CarouselItemView
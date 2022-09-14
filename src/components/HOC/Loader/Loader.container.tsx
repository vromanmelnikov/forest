import Loader from "./Loader"

interface Props {
    width: string,
    height: string,
    color: 'white' | 'black'
}

function LoaderContainer (props: Props) {

    let image
    if (props.color == 'black') {
        image = require('../../../assets/load_black.png')
    }
    else if (props.color == 'white') {
        image = require('../../../assets/load_white.png')
    }

    let data = {
        image,
        width: props.width,
        height: props.height
    }

    return(
        <Loader {...data}/>
    )
}

export default LoaderContainer
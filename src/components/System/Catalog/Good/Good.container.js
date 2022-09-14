import Good from "./Good"

let GoodContainer = (props) => {

    let data = {
        good: {...props.value},
        index: props.index,
        onGoodChange: props.onGoodChange
    }

    return(
        <Good {...data}/>
    )
}

export default GoodContainer
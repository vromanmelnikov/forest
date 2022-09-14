import Adding from "./Adding"

function AddingContainer (props: any) {

    let data = {
        flag: props.flag,
        toggler: props.toggler
    }

    return(
        <Adding {...data}/>
    )
}

export default AddingContainer
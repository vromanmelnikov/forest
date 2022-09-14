import Class from './Loader.module.css'

function Loader (props) {

    let style = {
        width: props.width,
        height: props.height
    }

    return(
        <div className={`${Class.Loader}`} style={style}>
            <img className={`${Class.image}`} src={props.image} alt=''/>
        </div>
    )
}

export default Loader
import Class from './Good.module.css'

let Good = (props) => {

    let good = props.good

    let photo = require(`../../../../assets/photos/${good.photo}.png`)

    return (
        <div className={`${Class.Good}`}>

            <div className={`${Class.image}`}>
                <img src={photo} id={`ph_${props.index}`} alt=''/>
            </div>
            <p className={`${Class.name}`}>
                {good.name}
            </p>
            <hr />
            <button
                className={`${Class.btn}`}
                onClick={
                    () => {
                        props.onGoodChange(props.index)
                    }
                }>Подробнее</button>
        </div>
    )
}

export default Good
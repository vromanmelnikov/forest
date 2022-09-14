import { STATIC_URL } from '../../../../services/api.confige'
import Class from './Reasons.module.css'

function Reasons(props) {

    return (
        <div className={`${Class.Reasons}`}>
            {
                props.reasons.map(
                    (value, index) => {
                        return (
                            <div
                                className={`${Class.block} ${index % 2 != 0 && Class.reverse}`}
                                key={index}
                            >
                                <img src={value.img} alt={value.text} />
                                <p>{value.text}</p>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default Reasons
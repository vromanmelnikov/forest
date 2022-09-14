import Class from './Info.module.css'

function Info(props) {

    return (
        <div className={`${Class.Info}`}>
            <h2>О нас</h2>
            <hr />
            <p>Компания: {props.info.company}</p>
            <p>Почта: <span> </span>
                <a
                    href={`email:${props.info.email}`}
                    className='link'
                >
                    {props.info.email}
                </a>
            </p>
            <p>Номера:</p>
            <div className={`${Class.numbers}`}>
                {
                    props.info.numbers.map(
                        (value, index) => {
                            return (
                                <a
                                    key={index}
                                    href={`tel:${value}`}
                                    className='link'
                                >
                                    {value}
                                </a>
                            )
                        }
                    )
                }
            </div>
            <p className={`${Class.adress}`}>Адрес: {props.info.adress}</p>
            <hr />
        </div>
    )
}

export default Info
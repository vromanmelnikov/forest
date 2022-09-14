import Class from './CategoryChoose.module.css'

let CategoryChoose = (props) => {

    return (
        <div className={`${Class.categories} container`}>

            <div className={`${Class.btn_block}`}>
                <h3 className='m-0'>Выберите категорию:</h3>
                <button
                    onClick={props.showMenu}
                >
                    {props.current != undefined && props.current.name}
                </button>
            </div>

            {
                props.menu == true &&
                <div className={`${Class.menu}`} id={'back'} onClick={
                    (event) => {
                        if (event.target.id == 'back') {
                            props.setMenu(false)
                        }
                    }
                }>
                    <div className={`${Class.block}`}>

                        <button onClick={props.closeMenu} >
                            Выйти
                        </button>
                        <p
                            className={`${props.current.id == -1 && Class.selected}`}
                            onClick={
                                () => {
                                    props.onChange(-1)
                                }
                            }
                        >
                            Все товары
                        </p>
                        {
                            props.categories.map(
                                (value, index) => {
                                    return (
                                        <p
                                            key={index}
                                            className={`${props.current.id == value.id && Class.selected}`}
                                            onClick={
                                                () => {
                                                    props.onChange(index)
                                                }
                                            }
                                        >
                                            {value.name}
                                        </p>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            }

        </div>
    )
}

export default CategoryChoose
import Class from './Header.module.css'
import logo from '../../../assets/logo_2.png'


let Header = (props) => {

    const menu = [
        {
            text: 'Главная',
            link: '/main'
        },
        {
            text: 'Товары',
            link: '/shop'
        },
        {
            text: 'О нас',
            link: '/about'
        }
    ]

    return (
        <div className={`${Class.Header}`}>
            <div className={`${Class.content} container`}>
                <div
                    className={`${Class.logo}`}
                    onClick={props.goToMain}
                >
                    <img src={logo} alt='На главную страницу' />
                </div>
                <div className={`${Class.menu_btn}`}>
                    <div className={`${Class.lines}`} id='lines' >
                        <div className={`${Class.menu_line}`}></div>
                        <div className={`${Class.menu_line}`}></div>
                        <div className={`${Class.menu_line}`}></div>
                    </div>
                    <div className={`${Class.menu}`} id='menu'>
                        {
                            menu.map(
                                (value, index) => {
                                    return (
                                        <p className={`${Class.link}`} key={index} onClick={
                                            () => {
                                                props.goToLink(value.link)
                                            }
                                        }>
                                            {value.text}
                                        </p>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
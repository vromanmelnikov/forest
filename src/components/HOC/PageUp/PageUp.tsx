import icon from '../../../assets/page_up.png'
import Class from './PageUp.module.css'

function PageUp(props: any) {

    return (
        <div className={`${Class.PageUp}`} onClick={props.toggle}>
            <a href='#'>
                <img src={icon}/>
            </a>

        </div>
    )
}

export default PageUp
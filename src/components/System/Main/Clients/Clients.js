import Class from './Clients.module.css'

import {STATIC_URL} from '../../../../services/api.confige'

function Clients(props) {

    return (
        <div className={`${Class.Clients_browser}`}>
            <div className={`${Class.block}`}>
                {
                    props.clients.map(
                        (value, index) => {
                            let url = `${STATIC_URL}/client_gallery/${value}`
                            // console.log(url)
                            return (
                                <div key={index} className={`${Class.item_browser}`}>
                                    <img src={url} />
                                </div>
                            )
                        }
                    )
                }
            </div>
            {
                props.showed == false
                &&
                <button className={`${Class.button}`} onClick={props.showMore}>Показать больше</button>
            }
            {
                props.showed == true
                &&
                <button className={`${Class.button}`} onClick={props.hideAll}>Скрыть</button>
            }
        </div>
    )
}

export default Clients
import Class from './GoodInfo.module.css'
import share from '../../../../../assets/share.png'
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap'

let GoodInfo = (props) => {

    let id = 'back'

    let photo = require(`../../../../../assets/photos/${props.photo}.png`)

    return (
        <div className={`${Class.GoodInfo}`} id={id} onClick={
            (event) => {
                if (event.target.id == 'back') {
                    props.closeGood()
                }
            }
        }>
            <div className={`${Class.block} container`}>
                <div className={`${Class.buttons}`}>
                    <Button className={`${Class.share}`} onClick={props.copyLink} id={`copy`}>
                        <img src={share} alt='Поделиться' />
                    </Button>
                    <UncontrolledPopover
                        className={`${Class.popover}`}
                        placement="left"
                        target="copy"
                        trigger="focus"
                    >
                        <PopoverBody>
                            Ссылка скопирована!
                        </PopoverBody>
                    </UncontrolledPopover>
                    <button
                        onClick={props.closeGood}>
                        Назад
                    </button>
                </div>
                <div className={`${Class.image}`}>
                    <img src={photo} />
                </div>
                <hr />
                <h2>{props.name}</h2>
                {
                    props.description != ''
                    &&
                    <>
                        <hr />
                        <h3>Описание</h3>
                        <p className={`${Class.desc}`}>
                            {props.description}
                        </p>
                    </>
                }
                <hr />
                <h3>Характеристики</h3>
                <div className={`${Class.info}`}>
                    {
                        props.spec.map(
                            (value, index) => {
                                return (
                                    <p className={`${Class.info_name}`} key={index}>
                                        {value.name}: <span className={`${Class.info_value}`}>{value.value}</span>
                                    </p>
                                )
                            }
                        )
                    }
                </div>
                <hr />
                <h3>Размерная сетка</h3>
                <div className={`${Class.table_block}`}>
                    {
                        props.table.flag == true
                            ?
                            <table >
                                <thead>
                                    <tr>
                                        <th>
                                            {props.table.c_name != '' && props.table.c_name}

                                            {props.table.r_name != '' ? '/' + props.table.r_name : ''} (мм)
                                        </th>
                                        {
                                            props.table.column.length != 0
                                                ?
                                                props.table.column.map(
                                                    (value, index) => {
                                                        return (
                                                            <th key={index}>{value}</th>
                                                        )
                                                    }
                                                )
                                                :
                                                ''
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        props.table.row.map(
                                            (value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th key={index}>{value}</th>
                                                        {
                                                            props.table.value[index].map(
                                                                (value, index) => {
                                                                    return (
                                                                        <td
                                                                            key={index}
                                                                            className={`${value == 0 && Class.red_point}`}
                                                                        >
                                                                            {value == 0 ? '-' : value}
                                                                        </td>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </tr>
                                                )
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                            :
                            <table>
                                <tbody>
                                    <tr>
                                        <th>{props.table.name}</th>
                                        <th>{props.table.value}</th>
                                    </tr>
                                </tbody>
                            </table>
                    }

                </div>
                {/* <div className={`${Class.table_block}`}>
                    <table >
                        <tbody>
                            <tr>
                                <th>Длина, ширина (мм)</th>
                                <th>Цена (руб)</th>
                            </tr>
                            {
                                props.table_2.map(
                                    (value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{value.length}*{value.width}</td>
                                                <td>{value.cost}</td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table> 
                </div>*/}

            </div>
        </div>
    )
}

export default GoodInfo
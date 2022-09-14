import Reasons from "./Reasons"

import reason_1 from '../../../../assets/reasons/1.jpg'
import reason_2 from '../../../../assets/reasons/2.jpg'
import reason_3 from '../../../../assets/reasons/3.png'

function ReasonsContainer(props) {

    const reasons = [
        {
            text: `Современное оборудование и
            экологически чистое сырье
            (сосна-ель) при производстве`,
            img: reason_1
        },
        {
            text: `Высокое качество работ,
            ответственность и честность
            перед заказчиком`,
            img: reason_2
        },
        {
            text: `Большой штат квалифицированных
            сотрудников, позволяет исполнять
            заказы в кратчайние сроки`,
            img: reason_3
        }
    ]

    let data = {
        reasons
    }

    return (
        <Reasons {...data}/>
    )
}

export default ReasonsContainer
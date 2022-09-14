import { useEffect } from "react"
import Goods from "./Goods"
import ApiService from '../../../../services/api.service'

function GoodsContainer (props) {

    useEffect(
        () => {
            ApiService.getGoods().then(
                (res) => {
                    console.log(res.data)
                }
            )
        }, []
    )

    return(
        <Goods />
    )
}

export default GoodsContainer
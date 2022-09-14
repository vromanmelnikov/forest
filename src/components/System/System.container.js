import { useEffect } from "react"
import { useDispatch } from "react-redux"
import ApiService from "../../services/api.service"
import { setCategories } from "../../store/categoryReducer"
import { setClientsList } from "../../store/clientsReducer"
import System from "./System"

let SystemContainer = (props) => {

    const dispatch = useDispatch()

    useEffect(
        () => {
            ApiService.getCatalog().then(
                res => {
                    console.log(res)
                    let list = res.data.map(
                        (value, index) => {
                            return({
                                name: value.name,
                                photo: value.img,
                                catShowed: true,
                                id: index
                            })
                        }
                    )
                    dispatch(setCategories(list))
                }
            )
            ApiService.getGoods().then(
                res => {
                    
                }
            )
            ApiService.getClients().then(
                res => {
                    dispatch(setClientsList(res.data))
                }
            )
        }, []
    )

    return (
        <System />
    )
}

export default SystemContainer
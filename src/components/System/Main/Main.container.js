import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import ApiService from "../../../services/api.service"
import { setCategories } from "../../../store/categoryReducer"
import Main from "./Main"

let MainContainer = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    let goToShop = () => {
        navigate('/shop/0')
    }

    const [gallery, setGallery] = useState([])
    // const [categories, setCategories]

    const reasons = [
        {
            
        }
    ]

    useEffect(
        () => {
            ApiService.getGallery().then(
                (res) => {
                    let galleryList = res.data.map(
                        (value, index) => {
                            return({
                                key: index + 1,
                                src: value
                            })
                        }
                    )
                    setGallery(galleryList)
                }
            )
        }, []
    )

    let data = {
        gallery,
        goToShop
    }

    return(
        <Main {...data}/>
    )
}

export default MainContainer
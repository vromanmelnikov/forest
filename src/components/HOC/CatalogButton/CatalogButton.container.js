import { useNavigate } from "react-router"
import CatalogButton from "./CatalogButton"

function CatalogButtonContainer (props) {

    const navigate = useNavigate()

    let goToCatalog = () => {
        navigate('/shop/0')
    }

    let data = {
        goToCatalog
    }

    return(
        <CatalogButton {...data}/>
    )
}

export default CatalogButtonContainer
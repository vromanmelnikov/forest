import { useEffect } from "react"
import { useNavigate } from "react-router"
import Admin from "./Admin"

function AdminContainer (props) {

    const navigate = useNavigate()

    useEffect(
        () => {
            // navigate('/admin/goods')
        }, []
    )

    return(
        <Admin />
    )
}

export default AdminContainer
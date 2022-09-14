import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Clients from "./Clients"

function ClientsContainer(props) {

    const clients = useSelector(
        state => state.clientsData.list
    )

    const [list, setList] = useState(clients.slice(0, 4))
    const [showed, setShowed] = useState(false)

    let showMore = () => {
        setList(clients)
        setShowed(true)
    }

    let hideAll = () => {
        setList(clients.slice(0, 4))
        setShowed(false)
    }

    useEffect(
        () => {
            if(clients.length != 0) {
                if (clients.length > 3) {
                    setList(clients.slice(0, 4))
                }
                else {
                    setList(clients)
                }
            }
        }, [clients]
    )

    let data = {
        clients: list,
        showMore,
        hideAll,
        showed
    }

    return (
        <Clients {...data} />
    )
}

export default ClientsContainer
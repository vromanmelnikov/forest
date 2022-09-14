import { useEffect, useState } from "react"
import Categories from "./Categories"

import ApiService from '../../../../services/api.service'
import { useSelector } from "react-redux"

function CategoriesContainer(props: any) {

    const [adding, setAdding] = useState(false)
    let toggler = () => setAdding(!adding)

    const [list, setList] = useState([])

    const [open, setOpen] = useState('')

    let openItem = (id: string) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    }

    useEffect(
        () => {
            ApiService.getCatalog().then(
                res => {
                    console.log(res)
                    setList(res.data)
                }
            )
        }, []
    )

    let deleteItem = (id: number) => {
        ApiService.deleteCategory(id).then(
            (res: any) => {
                console.log(res)
                ApiService.getCatalog().then(
                    res => {
                        console.log(res)
                        setList(res.data)
                    }
                )
            }
        )
    }

    let data = {
        adding,
        toggler,
        list,
        open,
        openItem,
        deleteItem
    }

    return (
        <Categories {...data} />
    )
}

export default CategoriesContainer
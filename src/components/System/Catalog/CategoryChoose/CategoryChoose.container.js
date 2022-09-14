import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CategoryChoose from "./CategoryChoose"
import { setCurrent } from '../../../../store/catalogReducer'

let CategoryChooseContainer = (props) => {

    const [menu, setMenu] = useState(false)
    const dispatch = useDispatch()

    let categories = useSelector(
        (state) => state.categoriesData.list
    )
    let current = useSelector(
        state => state.catalogData.current
    )

    let showMenu = () => {
        setMenu(true)
    }

    let onChange = (index) => {
        if (index == -1) {
            dispatch(setCurrent({
                name: 'Все товары',
                id: -1
            }))
        }
        else {
            dispatch(setCurrent(categories[index]))
        }
        props.onCategoryChange(index)
        setMenu(false)
    }

    let closeMenu = () => {
        setMenu(false)
    }

    useEffect(
        () => {
        }, [current]
    )

    let data = {
        categories,
        showMenu,
        onChange,
        closeMenu,
        setMenu,
        menu,
        current,
        onCategoryChange: props.onCategoryChange
    }

    return (
        <CategoryChoose {...data} />
    )
}

export default CategoryChooseContainer
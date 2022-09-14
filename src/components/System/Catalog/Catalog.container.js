import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router"
import { setCurrent } from "../../../store/catalogReducer"
import Catalog from "./Catalog"

let CatalogContainer = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    let location = useLocation()
    let search = new URLSearchParams(location.search)

    const [good, setGood] = useState(false)

    const goodsData = useSelector(
        (state) => {
            return (
                state.goodsData
            )
        }
    )

    let categories = useSelector(
        (state) => state.categoriesData.list
    )
    let current = useSelector(
        state => state.catalogData.current
    )

    let onGoodChange = (index) => {
        document.body.style.overflowY = 'hidden';
        setGood({
            ...goodsData[index],
            table: goodsData[index].table
        })
        const category = search.get('category')
        let url = '/shop'
        let query = ''
        if (category != null) {
            let categoryId = parseInt(category)
            if (categoryId >= 0 && categoryId < categories.length) {
                query += `category=${categoryId}`
            }
            else {
                query += `category=all`
            }
            query += `&good=${index}`
        }
        url += `?${query}`
        navigate(url)
    }

    let closeGood = () => {
        document.body.style.overflowY = 'auto';
        setGood(false)
        const category = search.get('category')
        // const goodId = search.get('good')
        let url = '/shop'
        let query = ''
        if (category != null) {
            let categoryId = parseInt(category)
            if (categoryId >= 0 && categoryId < categories.length) {
                query += `category=${categoryId}`
            }
            else {
                query += `category=all`
            }
            // query += `&good=${index}`
        }
        url += `?${query}`
        navigate(url)
    }

    let onCategoryChange = (index) => {
        if (index === -1) {
            navigate('/shop?category=all')
            return
        }
        navigate(`/shop?category=${index}`)
    }

    useEffect(
        () => {
            const category = search.get('category')
            const goodId = search.get('good')

            if (categories.length !== 0) {
                if (category != null) {

                    if (category === 'all') {
                        dispatch(setCurrent({
                            name: 'Все товары',
                            id: -1
                        }))
                    }
                    else if (parseInt(category) >= 0 && parseInt(category) <= categories.length) {
                        dispatch(setCurrent({
                            id: parseInt(category),
                            name: categories[parseInt(category)].name
                        }))
                    }

                    if (goodId != null) {
                        let id = parseInt(goodId)
                        if (id >= 0 && id < goodsData.length) {
                            setGood({
                                ...goodsData[id],
                                table: goodsData[id].table
                            })
                            document.body.style.overflowY = 'hidden';
                        }
                    }

                }
                else {
                    navigate('/shop?category=all')
                    dispatch(setCurrent({
                        name: 'Все товары',
                        id: -1
                    }))
                }
            }
        }, [categories]
    )

    const data = {
        good,
        goods: [...goodsData],
        categories,
        onCategoryChange,
        onGoodChange,
        closeGood,
        current
    }

    return (
        <Catalog {...data} />
    )
}

export default CatalogContainer
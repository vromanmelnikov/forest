import Class from './Catalog.module.css'
import CategoryChooseContainer from './CategoryChoose/CategoryChoose.container'
import GoodContainer from './Good/Good.container'
import GoodInfoContainer from './Good/GoodInfo/GoodInfo.container'
import PageUpContainer from '../../HOC/PageUp/PageUp.container'

let Catalog = (props) => {

    let goods = props.goods.filter(value => props.current?.id === -1 || value.category === props.current?.id)

    return (
        <>
            {
                props.good !== false &&
                <GoodInfoContainer good={props.good} closeGood={props.closeGood} />
            }
            <CategoryChooseContainer values={props.categories} onCategoryChange={props.onCategoryChange} curr={props.currCat} />
            <PageUpContainer />
            <div className={`${Class.Catalog} container`}>
                {
                    goods.length === 0
                        ?
                        <h2>На данный момент товары отсутствуют</h2>
                        :
                        goods.map(
                            (value, index) => {
                                return (
                                    <GoodContainer key={index} value={value} index={index} onGoodChange={props.onGoodChange} />
                                )
                            }
                        )
                }
            </div>
            <div>

            </div>
        </>

    )
}

export default Catalog
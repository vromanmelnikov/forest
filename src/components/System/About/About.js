import { useEffect } from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import GoodsContainer from '../Main/Goods/Goods.container';
import Class from './About.module.css'
import InfoContainer from './Info/Info.container';
import PartnersContainer from './Partners/Partners.container';
import Video from './Video/Video';

let About = (props) => {

    const mapState = { center: [55.327701, 41.603667], zoom: 15 };

    useEffect(
        () => {
            // console.log(window)
            window.VK.Widgets.Comments("vk_comments", {limit: 10, attach: "*"});
        }, []
    )

    return (
        <div className={`${Class.About} container`}>
            <InfoContainer />
            <Video />
            <YMaps className="YMap">
                <Map
                    width={'90%'}
                    defaultState={{ center: [55.327701, 41.603667], zoom: 10 }}
                    modules={["templateLayoutFactory", "layout.ImageWithContent"]}
                    state={mapState}>
                    <Placemark
                        geometry={{
                            coordinates: [55.327701, 41.603667]
                        }}
                    />
                </Map>
            </YMaps>
            <hr />
            <h2>
                Наши работы
            </h2>
            <GoodsContainer />
            {
                props.about === true &&
                <>
                    <hr />
                    <h2>
                        Наши партнеры
                    </h2>
                    <PartnersContainer />
                    <hr />
                    <h2>
                        Отзывы о нас
                    </h2>
                    <div id="vk_comments" className={`${Class.comments}`}></div>
                </>
            }
        </div>
    )
}

export default About
import '@brainhubeu/react-carousel/lib/style.css';
import Class from './Main.module.css'

import logo from '../../../assets/logo.png'
import GalleryContainer from './Gallery/Gallery.container';
import CatalorContainer from './Catalog/Catalog.container';
import ReasonsContainer from './Reasons/Reasons.container';
import GoodsContainer from './Goods/Goods.container';
import ClientsContainer from './Clients/Clients.container';

let Main = (props) => {

    return (
        <div className={`${Class.Main}`}>
            {/* <img src={'https://test.api.vvadev.ru/static/client_gallery/WhatsApp%20Image%202022-07-25%20at%2016.01.30.jpeg'}/> */}
            <div className={`${Class.info}`}>
                <div className={`${Class.block}`}>
                    <div className={`container ${Class.desc}`}>
                        <hr />
                        <div className={`${Class.logo}`}>
                            <img src={logo} alt=''/>
                        </div>
                        <hr className={`${Class.desc_hr}`}></hr>
                    </div>
                </div>
            </div>

            <div className={`${Class.description} container mt-3`}>
                <div className={`${Class.border_1}`}></div>
                <div className={`${Class.border_2}`}></div>
                <p>
                    Сегодня "МЕЛЕНКИ ЛЕС" – одно из крупнейших в России деревообрабатывающих производств во Владимирской области, работающее по безотходной технологии. Большая часть технологических процессов полностью автоматизирована. Автоматика используется при осуществлении контроля сырья и готовых изделий. Использование передовых технологий позволяет даже не из самого лучшего для переработки исходного материала, изготовить высококачественную продукцию. Многим конкурентам это не под силу. Вся продукция соответствует стандартам РФ и Евразийского Экономического Союза. Предприятие производит пиломатериал, экологические чистое топливо: брикеты RUF и пеллеты, широкий ассортимент столярных изделий – это жалюзийные дверки, мебельные фасады, мебельный щит, столешницы и подстолья, лавочки и столы для сада и дома, элементы лестничных конструкций, элементы декора. За последние годы нам удалость значительно нарастить объёмы производства и выйти на оптимальный уровень загрузки мощностей.
                </p>
            </div>

            <div className={`${Class.photos_carousel} container mt-3`}>
                <h2>Наше предприятие</h2>
                <hr />
                <GalleryContainer gallery={props.gallery} />
            </div>

            <div className={`${Class.photos_carousel} container mt-4`}>
                <h2>Каталог</h2>
                <hr />
                <CatalorContainer />
            </div>

            <div className={`${Class} container mt-4`}>
                <h2>Почему выбирают "МЕЛЕНКИ ЛЕС"?</h2>
                <ReasonsContainer />
            </div>

            <div className={`${Class.photos_carousel} container mt-4`}>
                <h2>Наши работы</h2>
                <hr />
                <GoodsContainer />
            </div>
            <div className={`${Class.photos_carousel} container mt-4`}>
                <h2>Изделия наших клиентов</h2>
                <hr />
                <ClientsContainer />
            </div>
            
        </div>
    )
}

export default Main
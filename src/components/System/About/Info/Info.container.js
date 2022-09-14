import Info from "./Info"

function InfoContainer (props) {

    let info = {
        company: 'ООО "МЕЛЕНКИ ЛЕС"',
        number: '8 (***) *** ** **',
        numbers: [
            '8 (49247) 2-23-90',
            '8 (49247) 2-31-54',
            '8 (49247) 2-19-50',
            '+7-905-614-98-77',
            '+7-905-615-02-76'
        ],
        email: 'svv-mel@yandex.ru',
        adress: 'улица Дзержинского, 54А, Меленки, Владимирская область'
    }

    let data = {
        info
    }

    return(
        <Info {...data}/>
    )
}

export default InfoContainer
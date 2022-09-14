import Class from './Footer.module.css'

function Footer(props) {

    return (
        <div className={`${Class.Footer}`}>
            <div className={`${Class.block}`}>
                <hr />
                <h3>Created by <a className={`${Class.link}`} target="_blank" rel="noreferrer" href='https://vk.com/vvadevteam'>VVA DEV TEAM</a></h3>
            </div>
        </div>
    )
}

export default Footer
import Class from './Video.module.css'

function Video(props) {
    return (
        <div className={`${Class.Video}`}>
            <iframe
            className={`${Class.frame}`}
                src="https://www.youtube.com/embed/TWglhDWfFS4"
                title="ООО Меленки-Лес"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
            <hr />
        </div>
    )
}

export default Video
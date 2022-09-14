import { useState } from "react"
import Feedback from "./Feedback"

function FeedbackContainer (props) {

    const [feedback, setFeedback] = useState(false)
    const toggle = () => setFeedback(!feedback)

    let data = {
        feedback,
        toggle
    }

    return(
        <Feedback {...data}/>
    )
}

export default FeedbackContainer
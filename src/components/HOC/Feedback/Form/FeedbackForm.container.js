import { useRef, useState } from "react"
import FeedbackService from "../../../../services/feedback.service"
import FeedbackForm from "./FeedbackForm"

function FeedbackFormContainer(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    let form = useRef()

    let onNameChange = (event) => {
        let value = event.target.value
        setName(value)
    }

    let onEmailChange = (event) => {
        let value = event.target.value
        setEmail(value)
    }

    let sendFeedback = (event) => {
        event.preventDefault();
        FeedbackService.sendFeedback(form.current)
            .then((result) => {
                if (result.status === 200) {
                    props.toggle()
                }
            }, (error) => {
                console.log(error.text);
            });
    }

    let data = {
        name,
        email,
        onNameChange,
        onEmailChange,
        sendFeedback,
        form
    }

    return (
        <FeedbackForm {...data} />
    )
}

export default FeedbackFormContainer
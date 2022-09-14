import Class from './Feedback.module.css'
import icon from '../../../assets/feedback.png'
import { Modal } from 'reactstrap'
import FeedbackFormContainer from './Form/FeedbackForm.container'

function Feedback(props) {

    let args = {
        centered: true
    }

    return (
        <>
            <Modal isOpen={props.feedback} toggle={props.toggle} {...args}>
                <FeedbackFormContainer toggle={props.toggle}/>
            </Modal>
            {
                props.feedback === false
                &&
                <div className={`${Class.Feedback}`} onClick={props.toggle}>
                    <img src={icon} alt=''/>
                </div>
            }
        </>
    )
}

export default Feedback
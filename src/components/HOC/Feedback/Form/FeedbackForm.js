import { Button, Input, ModalBody, ModalFooter, ModalHeader } from "reactstrap"

import Class from './FeedbackForm.module.css'

function FeedbackForm(props) {

    return (
        <>
            <ModalHeader>
                Обратная связь
            </ModalHeader>
            <ModalBody>
                <form
                    className={`${Class.form}`}
                    onSubmit={
                        (event) => {
                            props.sendFeedback(event)
                        }
                    }
                    ref={props.form}
                >
                    <div>
                        <Input
                            type="text"
                            placeholder="Фамилия и имя"
                            value={props.name} onChange={
                                (event) => {
                                    props.onNameChange(event)
                                }
                            }
                            name="name"
                        />
                    </div>
                    <div>
                        <Input
                            type="email"
                            placeholder="Почта"
                            value={props.email}
                            onChange={
                                (event) => {
                                    props.onEmailChange(event)
                                }
                            }
                            name="email"
                        />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="success"
                    className={`${Class.btn}`}
                    onClick={
                        (event) => {
                            props.sendFeedback(event)
                        }
                    }
                >
                    Отправить
                </Button>
            </ModalFooter>
        </>
    )
}

export default FeedbackForm
import { Form, Input, Modal } from "reactstrap"

function Adding(props: any) {

    let args = {
        centered: true
    }

    return (
        <Modal
            isOpen={props.flag}
            toggle={props.toggler}
            {...args}
        >
            <Form className="p-3">
                <Input type="text" placeholder="Название категории"/>
                <Input type="file" placeholder="Выберите файл" className="mt-3"/>
            </Form>
        </Modal>
    )
}

export default Adding
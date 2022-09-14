import { Accordion, AccordionHeader, AccordionItem, Button, ButtonGroup, Card, CardBody, CardHeader } from "reactstrap"
import AddingContainer from "./Adding/Adding.container"

function Categories(props: any) {

    return (
        <div>
            <AddingContainer flag={props.adding} toggler={props.toggler} />
            <Card className="container mt-4">
                <CardBody>
                    <Button
                        color="success"
                        onClick={props.toggler}
                    >
                        Добавить категорию
                    </Button>
                    {
                        props.list.map(
                            (value: any, index: number) => {

                                return (
                                    <Card key={index}>
                                        <CardHeader>{value.name}</CardHeader>
                                        <CardBody>
                                            <ButtonGroup>
                                                <Button color="success">Изменить</Button>
                                                <Button
                                                    color="danger"
                                                    onClick={
                                                        () => {
                                                            props.deleteItem(value.id)
                                                        }
                                                    }
                                                >
                                                    Удалить
                                                </Button>
                                            </ButtonGroup>
                                        </CardBody>
                                    </Card>
                                )
                            }
                        )
                    }
                </CardBody>
            </Card>
        </div>
    )
}

export default Categories
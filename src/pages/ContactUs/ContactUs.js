import React from 'react'
import { Container, Row ,Col, Form} from 'react-bootstrap'
import Navbar from '../../components/navbar/navbar'
const ContactUs = () => {
    return (
        <>
        <Navbar />
        <Container>
            <Row>
                <Col className='p-5' >
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Shrey"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                    defaultValue="Sumariya"
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="First name"
                                    defaultValue="Shrey"
                                />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ContactUs

import React,{useState} from 'react'
import { Container, Row ,Col, Form,Card,Button } from 'react-bootstrap'
import Navbar from '../components/navbar';
const ContactUs = () => {

    const[value,setValue] = useState();
    return (
        <>
        <Navbar />
        
        <Container fluid={true} style={{backgroundImage:'url(https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg)'}}>
            <Row>
                <Col className='p-5' >
                    <Card className='m-2' style={{boxShadow:'0 4px 8px 0 rgba(0,0,0,0.15)'}}>
                        <Card.Title style={{fontSize:'2.3rem',display:'inline',margin:'auto',marginTop:'1rem'}}>Contact Us</Card.Title>
                        <hr></hr>
                        <Card.Body className='m-2'>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                                        <Form.Label style={{fontSize:'1.3rem'}}>First name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="First name"
                                            defaultValue="Shrey"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                                        <Form.Label style={{fontSize:'1.3rem'}}>Last name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Last name"
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label style={{fontSize:'1.3rem'}}>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="email"
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label style={{fontSize:'1.3rem',marginRight:'2rem'}}>Phone</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="phone"
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label style={{fontSize:'1.3rem'}}>Address</Form.Label>
                                        <Form.Control
                                            required
                                            as="textarea"
                                            placeholder="address"
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="validationCustom01">
                                        <Form.Label style={{fontSize:'1.3rem'}}>Message</Form.Label>
                                        <Form.Control
                                            required
                                            as="textarea"
                                            placeholder="message"
                                        />
                                    </Form.Group>
                                </Form.Row>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <Button>Submit</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ContactUs

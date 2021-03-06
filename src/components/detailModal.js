import { Modal, Button, Container, Row, Col, Image, Card } from 'react-bootstrap';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import { AppContext } from './appContext';

const Details = (props) => {

    const c = props.cast;
    return (
        <div>
            {
                props.cast ?

                    <Modal show={props.show} onHide={props.hideModal} size="md">
                        <Modal.Body>
                            <Container fluid={true}>
                                        <Row>
                                            <Card.Img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.image}`} alt=""  style={{backgroundSize:'contain'}} />
                                        </Row>
                                        <Row style={{ marginTop: '1rem' }}>
                                            <div style={{fontSize:'1.5rem',color:'dark-brown'}}>Title</div>
                                        </Row>
                                        <Row className='m-0'>
                                            <div style={{marginTop:'1rem'}}>{props.title}</div>
                                        </Row>
                                        <Row style={{ marginTop: '1rem' }}>
                                            <div style={{fontSize:'1.5rem',color:'dark-brown'}}>About</div>
                                        </Row>
                                         <Row className='m-0'>
                                            <div style={{marginTop:'1rem'}}>{props.overview}</div>
                                        </Row>
                                        <Row style={{ marginTop: '1rem' }}>
                                            <div style={{fontSize:'1.5rem',color:'dark-brown'}}>Cast</div>
                                        </Row>
                                        <Row>
                                            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginLeft:'2rem',marginRight:'2rem',marginTop:'1rem',marginBottom:'2rem'}}>
                                            {
                                                    c.slice(0, 4).map((value) => {
                                                        return (
                                                            <div>
                                                                <Image src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${value.profile_path}`} style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '60%', heigth: "60%" }}></Image>
                                                                <div style={{fontSize:'1rem'}}>{value.original_name}</div>
                                                            </div>
                                                        );
                                                    }) 
                                            }
                                            </div>
                                        </Row>
                                        <Row>
                                            <Col md={4} xs={12} >
                                                <Button style={{backgroundColor:'transparent',color:'red',borderRadius:'0.2rem',border:'solid red'}}>
                                                    AddToList
                                                </Button>
                                            </Col>
                                            <Col md={4} xs={12} >
                                                <Button style={{backgroundColor:'transparent',color:'blue',borderRadius:'0.2rem',border:'solid blue'}} onClick={props.hideModal} >
                                                    Close
                                                </Button>
                                            </Col>
                                            <Col md={4} xs={12}>
                                                
                                                    {props.trailer ? <Button style={{backgroundColor:'transparent',color:'green',border:'solid green',borderRadius:'0.3rem'}}><a href={`https://www.youtube.com/watch?v=${props.trailer.key}`} alt="#" target="__blank" style={{textDecoration:'none',color:'green'}}>Trailer</a></Button> : <Button style={{backgroundColor:'transparent',color:'green',border:'solid transparent'}}><div style={{backgroundColor:'transparent',border:"solid transparent",borderRadius:'0rem',color:'green'}}>NoTrailer</div></Button>}
                                            </Col>
                                        </Row>
                            </Container>
                        </Modal.Body>
                    </Modal>
                    : null}
        </div>
    );
}
export default Details;
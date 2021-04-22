import React, { useState ,useEffect} from 'react'
import {IMAGE_BASE_URL,BACKDROP_SIZE} from '../../../config'
import './TvShowPopular.css'
import {Card,Container,Row,Col} from 'react-bootstrap'


const url = "https://api.themoviedb.org/3/tv/popular?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1";
const TvShowPopular = () => {

    const [tvPopular,setTvPopular] = useState([]);

    const getPopularTv = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
        setTvPopular(result);
    }

    useEffect(()=>{
        getPopularTv();
    },[]);

    return (
        <>
        <div className="tv-popular">
            <h1 className="tv-popular-written">POPULAR</h1>
        </div>
        <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
            <Row noGutters={true}>
                    {tvPopular.slice(0,6).map((tPopular)=>{
                        const{backdrop_path} = tPopular
                        return(
                            <Col className='p-0'>
                                <Card className="bg-dark text-white">
                                    <Card.Img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`} alt="Card image" />
                                </Card>
                            </Col>
                        );
                    })}
            </Row>
        </Container>
        </>
    )
}

export default TvShowPopular
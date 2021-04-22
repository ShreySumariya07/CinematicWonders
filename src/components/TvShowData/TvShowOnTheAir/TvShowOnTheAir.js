import React, { useState ,useEffect} from 'react'
import {IMAGE_BASE_URL,BACKDROP_SIZE} from '../../../config'
import './TvShowOnTheAir.css'
import {Card,Container,Row,Col} from 'react-bootstrap'


const url = "https://api.themoviedb.org/3/tv/on_the_air?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1";
const TvShowOnTheAir = () => {

    const [tvShowOnTheAir,setTvShowOnTheAir] = useState([]);

    const getOnTheAirTvShow = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
        setTvShowOnTheAir(result);
    }

    useEffect(()=>{
        getOnTheAirTvShow();
    },[]);

    return (
        <>
        <div className="tv-show-on-the-air">
            <h1 className="tv-show-on-the-air-written">Tv Show On THe Air</h1>
        </div>
        <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
            <Row noGutters={true}>
                    {tvShowOnTheAir.slice(0,6).map((tShowAir)=>{
                        const{backdrop_path} = tShowAir
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

export default TvShowOnTheAir
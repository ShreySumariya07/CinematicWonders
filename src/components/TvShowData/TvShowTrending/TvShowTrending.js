import React, { useEffect, useState } from 'react'
import {Card,Container,Row,Col} from 'react-bootstrap';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../../config';
import './TvShowTrending.css'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const url = "https://api.themoviedb.org/3/trending/tv/day?api_key=a7215621d52fbeb2968949767ba61258";
const TvShowTrending = () => {

    const [ tvTrending,setTvTrending] = useState([]);

    const getTrendingTv = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
        setTvTrending(result)
    }

    useEffect(() => {
        getTrendingTv();
    },[]);

    return (
        <>
        <div className="tv-trending">
            <h1 className="tv-trending-written">TRENDING</h1>
        </div>
        <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
            <Row noGutters={true}>
                {tvTrending.slice(0,6).map((tTrending) => {
                    const {backdrop_path} = tTrending;
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

export default TvShowTrending
import React, { useEffect, useState } from 'react'
import { Container,Card, Row,Col } from 'react-bootstrap'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../../config'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './MovieTrending.css'
const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=a7215621d52fbeb2968949767ba61258'
const MovieTrending = () => {

    const [movieTrending,setMovieTrending] = useState([]);

    const getTrendingMovies = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
        setMovieTrending(result);
        console.log(movieTrending);
    }

    useEffect(()=>{
        getTrendingMovies();
    },[])
    return (
        <>
        <div className="movie-trending" >
            <h1 className='movie-trending-written'>TRENDING</h1>
        </div>
        <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
            <Row noGutters={true}>
                {movieTrending.slice(0,6).map((mTrending)=>{
                    const {backdrop_path} = mTrending;
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

export default MovieTrending
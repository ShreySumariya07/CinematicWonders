import React, { useState,useEffect } from 'react'
import { Container,Card, Row,Col} from 'react-bootstrap'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../../config';
import './MoviePopular.css'
import {OwlCarousel} from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const url = "https://api.themoviedb.org/3/movie/popular?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1";

const MoviePopular = () => {
    const [popularMovie,setPopularMovie] = useState([]);

    const getPopularMovies = async() =>{
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
        setPopularMovie(result);
    }

    useEffect(() =>{
        getPopularMovies();
    },[])

    return (
        <div>
        <div className="movie-popular">
            <h1 className="movie-popular-written">POPULAR</h1>
        </div>
        <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
            <Row noGutters={true}>
                {popularMovie.slice(0,6).map((mTrending)=>{
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
        </div>
    );
}

export default MoviePopular
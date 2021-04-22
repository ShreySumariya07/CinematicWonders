import React, { useEffect, useState } from 'react'
import { Container,Card, Row,Col } from 'react-bootstrap'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../../config'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './MovieTopRated.css'
const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a7215621d52fbeb2968949767ba61258'
const MovieTopRated = () => {

    const [movieTopRated,setMovieTopRated] = useState([]);

    const getTopRatedMovies = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
        setMovieTopRated(result);
    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])
    return (
        <>
        <div className="movie-top-rated" >
            <h1 className='movie-top-rated-written'>TOP RATED MOVIES</h1>
        </div>
        <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
            <Row noGutters={true}>
                {movieTopRated.slice(0,6).map((mTop)=>{
                    const {backdrop_path} = mTop;
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

export default MovieTopRated;
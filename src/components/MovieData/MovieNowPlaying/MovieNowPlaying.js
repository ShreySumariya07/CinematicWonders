import React, { useEffect, useState } from 'react'
import { Container,Card, Row,Col } from 'react-bootstrap'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../../config'
import './MovieNowPlaying.css'
const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1'
const MovieNowPlaying = () => {

    const [movieNowPlaying,setMovieNowPlaying] = useState([]);

    const getNowPlayingMovies = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
        setMovieNowPlaying(result);
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
    return (
        <>
        <div className="movie-now-playing" >
            <h1 className='movie-now-playing-written'>NOW PLAYING</h1>
        </div>
        <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
            <Row noGutters={true}>
                {movieNowPlaying.slice(0,6).map((mNow)=>{
                    const {backdrop_path} = mNow;
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

export default MovieNowPlaying
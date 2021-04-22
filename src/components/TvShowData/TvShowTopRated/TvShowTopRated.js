import React, { useState ,useEffect} from 'react'
import {IMAGE_BASE_URL,BACKDROP_SIZE} from '../../../config'
import './TvShowTopRated.css'
import {Card,Container,Row,Col} from 'react-bootstrap'


const url = "https://api.themoviedb.org/3/tv/top_rated?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1";
const TvShowTopRated = () => {

    const [tvTopRated,setTvTopRated] = useState([]);

    const getTopRatedTv = async () =>{
        const response = await fetch(url);
        const data = await response.json();
        const result = data.results;
        setTvTopRated(result);
    }

    useEffect(()=>{
        getTopRatedTv();
    },[]);

    return (
        <>
        <div className="tv-top-rated">
            <h1 className="tv-top-rated-written">Top Rated Tv Shows</h1>
        </div>
        <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
            <Row noGutters={true}>
                    {tvTopRated.slice(1,7).map((tTop)=>{
                        const{backdrop_path} = tTop
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

export default TvShowTopRated
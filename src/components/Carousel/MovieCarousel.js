
import React, { useEffect, useState }  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';


const url1="https://api.themoviedb.org/3/movie/upcoming?api_key=a7215621d52fbeb2968949767ba61258";

const MovieCarousel = () => {
  const [ movieList, setMovieList] = useState([])

  const getMovieCarousel = async () => {
    const response = await fetch(url1);
    const data = await response.json();
    setMovieList(data.results);
  }

  useEffect(()=>{
    getMovieCarousel();
  },[])

  return (
    <Container fluid={true} className='p-0' style={{backgroundColor:'rgba(0, 0, 0, 0.849)',paddingBottom:'3rem'}}>
      <Carousel>
        {movieList.slice(0,3).map((mCarousel) => { 
          const {backdrop_path} = mCarousel;
          return(
            <Carousel.Item className="caraousel-height">
              <img
                className="d-block w-100"
                src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default MovieCarousel;
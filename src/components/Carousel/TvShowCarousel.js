
import React, { useEffect, useState }  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../config';


const url="https://api.themoviedb.org/3/tv/airing_today?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1";

const TvShowCarousel = () => {
  const [ tvShowList, setTvShowList] = useState([])

  const getTvShowCarousel = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTvShowList(data.results);
  }

  useEffect(()=>{
    getTvShowCarousel();
  },[])

  return (
    <Container fluid={true} className='p-0' style={{backgroundColor:'rgba(0, 0, 0, 0.849)',paddingBottom:'3rem'}}>
      <Carousel>
        {tvShowList.slice(0,3).map((tCarousel) => { 
          const {backdrop_path} = tCarousel;
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

export default TvShowCarousel;
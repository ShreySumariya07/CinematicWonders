
import React, { useEffect, useState }  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import {IMAGE_BASE_URL,BACKDROP_SIZE} from '../../config';

const url1="https://api.themoviedb.org/3/trending/all/day?api_key=a7215621d52fbeb2968949767ba61258";

const GeneralCarousel = () => {
  const [ generalList, setGeneralList] = useState([])

  const getGeneralCarousel = async () => {
    const response = await fetch(url1);
    const data = await response.json();
    setGeneralList(data.results);
  }

  useEffect(()=>{
    getGeneralCarousel();
  },[])

  return (
    <Container fluid={true} className='p-0' style={{backgroundColor:'rgba(0, 0, 0, 0.849)',paddingBottom:'3rem'}}>
      <Carousel>
        {generalList.slice(0,3).map((gCarousel) => { 
          const {backdrop_path} = gCarousel;
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

export default GeneralCarousel;
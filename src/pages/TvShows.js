import React,{ useContext,useEffect } from 'react'
import TvShowCarousel from '../components/Carousel/TvShowCarousel'
import Navbar from '../components/navbar'
import {Container,Row,Col} from 'react-bootstrap';
import Details from '../components/detailModal';
import { FaChevronLeft,FaChevronRight } from 'react-icons/all';
import CardTV from '../components/CardTV';
import '../assets/css/TvShows.css';
import { AppContext } from '../components/appContext';
import Footer from './Footer';

const TvShows = () => {

    const{id,trailer,overview,title,image,cast,show,handleClose,currentTVTrending,currentTVPopular,currentTVTopRated,currentTVShowOnTheAir,setCurrentTVTrending,setCurrentTVPopular,setCurrentTVTopRated,setCurrentTVShowOnTheAir,changePrevTVTrending,changePrevTVTopRated,changePrevTVShowOnTheAir,changePrevTVPopular,changeNextTVTrending,changeNextTVTopRated,changeNextTVShowOnTheAir,changeNextTVPopular,getTrendingTV,getTopRatedTV,getShowOnTheAirTV,getPopularTV,getTvCast,tvTrending,tvPopular,tvTopRated,tvShowOnTheAir} = useContext(AppContext);
    
    useEffect(() => {
        getTrendingTV();
        getPopularTV();
        getTopRatedTV();
        getShowOnTheAirTV();
    },[])

    return (
        <>
            <main className="home-background">
                <Navbar />
                <TvShowCarousel />
                <Details show={show} hideModal={handleClose} id={id} title={title} overview={overview} image={image} cast={cast} trailer={trailer}></Details>
                <div className="tv-title">
                    <h1 className="tv-title-written">TRENDING</h1>
                </div>
                <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
                    <Row noGutters={true}>
                        <button class="icon-effect" onClick={() => changePrevTVTrending()}>
                            <FaChevronLeft></FaChevronLeft>
                        </button>
                        {tvTrending.slice(currentTVTrending-1,currentTVTrending+4).map((tTrending) => {
                            return(
                                <Col className='p-0'>
                                    <CardTV id={tTrending.id} title={tTrending.original_title} overview={tTrending.overview} image={tTrending.backdrop_path}  />
                                </Col>
                            );
                        })}
                        <button class="icon-effect" onClick={() => changeNextTVTrending()}>
                            <FaChevronRight></FaChevronRight>
                        </button>
                    </Row>
                </Container>
                <div className="tv-title">
                    <h1 className="tv-title-written">POPULAR</h1>
                </div>
                <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
                    <Row noGutters={true}>
                        <button class="icon-effect" onClick={() => changePrevTVPopular()}>
                            <FaChevronLeft></FaChevronLeft>
                        </button>
                            {tvPopular.slice(currentTVPopular-1,currentTVPopular+4).map((tPopular)=>{
                                return(
                                    <Col className='p-0'>
                                        <CardTV id={tPopular.id} title={tPopular.original_title} overview={tPopular.overview} image={tPopular.backdrop_path}/>
                                    </Col>
                                );
                            })}
                        <button class="icon-effect" onClick={() => changeNextTVPopular()}>
                            <FaChevronLeft></FaChevronLeft>
                        </button>
                    </Row>
                </Container>
                <div className="tv-title">
                    <h1 className="tv-title-written">Top Rated Tv Shows</h1>
                </div>
                <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
                    <Row noGutters={true}>
                        <button class="icon-effect" onClick={() => changePrevTVTopRated()}>
                            <FaChevronLeft></FaChevronLeft>
                        </button>
                            {tvTopRated.slice(currentTVTopRated-1,currentTVTopRated+4).map((tTop)=>{
                                return(
                                    <Col className='p-0'>
                                        <CardTV id={tTop.id} title={tTop.original_title} overview={tTop.overview} image={tTop.backdrop_path}/>
                                    </Col>
                                );
                            })}
                        <button class="icon-effect" onClick={() => changeNextTVTopRated()}>
                            <FaChevronRight></FaChevronRight>
                        </button>
                    </Row>
                </Container>
                <div className="tv-title">
                    <h1 className="tv-title-written">Tv Show On THe Air</h1>
                </div>
                <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
                    <Row noGutters={true}>
                        <button class="icon-effect" onClick={() => changePrevTVShowOnTheAir()}>
                            <FaChevronLeft></FaChevronLeft>
                        </button>
                            {tvShowOnTheAir.slice(currentTVShowOnTheAir-1,currentTVShowOnTheAir+4).map((tShowAir)=>{
                                return(
                                    <Col className='p-0'>
                                        <CardTV id={tShowAir.id} title={tShowAir.original_title} overview={tShowAir.overview} image={tShowAir.backdrop_path}/>
                                    </Col>
                                );
                            })}
                        <button class="icon-effect" onClick={() => changeNextTVShowOnTheAir()}>
                            <FaChevronRight></FaChevronRight>
                        </button>
                    </Row>
                </Container>
            </main> 
            <Footer />
        </>
    )
}

export default TvShows
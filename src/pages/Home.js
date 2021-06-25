import React,{useEffect,useContext} from 'react';
import GeneralCarousel from '../components/Carousel/GeneralCarousel';
import Navbar from '../components/navbar';
import {Container,Row,Col} from 'react-bootstrap';
import Details from '../components/detailModal';
import { FaChevronLeft,FaChevronRight } from 'react-icons/all';
import CardM from '../components/CardM';
import CardTV from '../components/CardTV';
import "../assets/css/home.css";
import { AppContext } from '../components/appContext';
import Footer from './Footer';

const Home = () => {

    const {id,trailer,title,overview,image,cast,handleClose,show,movieTrending,popularMovie,tvTrending,tvPopular,currentMovieTrending,currentMoviePopular,currentTVTrending,currentTVPopular,changeNextTVTrending,changeNextTVPopular,changePrevTVPopular,changePrevTVTrending,changePrevMoviePopular,changePrevMovieTrending,changeNextMovieTrending,changeNextMoviePopular,getTrendingMovies,getPopularMovies,getTrendingTV,getPopularTV} = useContext(AppContext);
    
    useEffect(() => {
        getTrendingMovies();
        getPopularMovies();
        getTrendingTV();
        getPopularTV();
    },[])

    return (
        <>
            <main className="home-background">
                <Navbar />
                <GeneralCarousel />
                <Details show={show} hideModal={handleClose} id={id} title={title} overview={overview} image={image} cast={cast} trailer={trailer}></Details>
                <div className='home-title' >
                    <h1 className='home-title-written'>TRENDING</h1>
                </div>
                <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
                    <Row noGutters={true}>
                        <button class="icon-effect" onClick={() => changePrevMovieTrending()}>
                            <FaChevronLeft></FaChevronLeft>
                        </button>
                        {movieTrending.slice(currentMovieTrending-1,currentMovieTrending+4).map((mTrending)=>{
                            return(
                                <Col className='p-0'>
                                    <CardM id={mTrending.id} title={mTrending.original_title} overview={mTrending.overview} image={mTrending.backdrop_path} />
                                </Col>
                            );
                            
                        })}
                        <button class='icon-effect' onClick={() => changeNextMovieTrending()}>
                            <FaChevronRight></FaChevronRight>
                        </button>
                    </Row>
                </Container>
                <div className='home-title'>
                    <h1 className='home-title-written'>POPULAR</h1>
                </div>
                <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
                    <Row noGutters={true}>
                        <button class="icon-effect" onClick={() => changePrevMoviePopular()}>
                            <FaChevronLeft></FaChevronLeft>
                        </button>
                        {popularMovie.slice(currentMoviePopular-1,currentMoviePopular+4).map((mPopular)=>{
                            
                            return(
                                <Col className='p-0'>
                                    <CardM id={mPopular.id} title={mPopular.original_title} overview={mPopular.overview} image={mPopular.backdrop_path} />
                                </Col>
                            );
                        })}
                        <button class='icon-effect' onClick={() => changeNextMoviePopular()}>
                            <FaChevronRight></FaChevronRight>
                        </button>
                    </Row>
                </Container>
                <div className="home-title">
                    <h1 className="home-title-written">TRENDING</h1>
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
                <div className="home-title">
                    <h1 className="home-title-written">POPULAR</h1>
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
            </main> 
            <Footer />
        </>
    );
}



export default Home;

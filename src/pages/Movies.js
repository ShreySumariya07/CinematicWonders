import React,{useContext,useEffect,useState} from 'react';
import Navbar from '../components/navbar';
import MovieCarousel from '../components/Carousel/MovieCarousel';
import {Container,Row,Col} from 'react-bootstrap';
import Details from '../components/detailModal';
import { FaChevronLeft,FaChevronRight } from 'react-icons/all';
import CardM from '../components/CardM';
import "../assets/css/Movies.css";
import { AppContext } from '../components/appContext';
import Footer from './Footer';


const Movies = () => {

    const{id,trailer,setId,cast,setCast,getCast,image,setImage,overview,setOverview,title,setTitle,show,setShow,handleShow,handleClose,currentMovieTrending,currentMoviePopular,currentMovieTopRated,currentMovieUpcoming,currentMovieNowPlaying,setCurrentMovieNowPlaying,setCurrentMovieTrending,setCurrentMoviePopular,setCurrentMovieTopRated,setCurrentMovieUpcoming,changePrevMovieTrending,changePrevMoviePopular,changePrevMovieTopRated,changePrevMovieUpcoming,changePrevMovieNowPlaying,changeNextMovieTrending,changeNextMoviePopular,changeNextMovieTopRated,changeNextMovieUpcoming,changeNextMovieNowPlaying,getTrendingMovies,getPopularMovies,getTopRatedMovies,getNowPlayingMovies,getUpcomingMovies,movieTrending,popularMovie,movieUpcoming,movieTopRated,movieNowPlaying} = useContext(AppContext);

    useEffect(() => {
        getTrendingMovies();
        getPopularMovies();
        getTopRatedMovies();
        getNowPlayingMovies();
        getUpcomingMovies();
    },[])
    return (
        <>
            <main className="home-background">
                <Navbar />
                <MovieCarousel />
                <Details show={show} hideModal={handleClose} id={id} title={title} overview={overview} image={image} cast={cast} trailer={trailer} ></Details>
                <div className='movie-title' >
                    <h1 className='movie-title-written'>TRENDING</h1>
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
                <div className='movie-title'>
                    <h1 className='movie-title-written'>POPULAR</h1>
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
                <div className='movie-title' >
                    <h1 className='movie-title-written'>TOP RATED MOVIES</h1>
                </div>
                <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
                    <Row noGutters={true}>
                        <button class="icon-effect" onClick={() => changePrevMovieTopRated()}>
                            <FaChevronLeft></FaChevronLeft>
                        </button>
                        {movieTopRated.slice(currentMovieTopRated-1,currentMovieTopRated+4).map((mTop)=>{
                            return(
                                <Col className='p-0'>
                                    <CardM id={mTop.id} title={mTop.original_title} overview={mTop.overview} image={mTop.backdrop_path} />
                                </Col>
                            );
                        })}
                        <button class="icon-effect" onClick={() => changeNextMovieTopRated()}>
                            <FaChevronRight></FaChevronRight>
                        </button>
                    </Row>
                </Container>
                <div className='movie-title'>
                    <h1 className='movie-title-written'>UPCOMING</h1>
                </div>
                <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
                    <Row noGutters={true}>
                        <button class="icon-effect" onClick={() => changePrevMovieUpcoming()}>
                            <FaChevronLeft></FaChevronLeft>
                        </button>
                        {movieUpcoming.slice(currentMovieUpcoming-1,currentMovieUpcoming+4).map((mUpcoming)=>{
                            return(
                                <Col className='p-0'>
                                    <CardM id={mUpcoming.id} title={mUpcoming.original_title} overview={mUpcoming.overview} image={mUpcoming.backdrop_path} />
                                </Col>
                            );
                        })}
                        <button class='icon-effect' onClick={() => changeNextMovieUpcoming()}>
                            <FaChevronRight></FaChevronRight>
                        </button>
                    </Row>
                </Container>
                <div className="movie-title" >
                    <h1 className='movie-title-written'>NOW PLAYING</h1>
                </div>
                <Container fluid={true} className='p-0' style={{backgroundColor: 'rgba(0, 0, 0, 0.849)'}}>
                    <Row noGutters={true}>
                        <button class="icon-effect" onClick={() => changePrevMovieNowPlaying()}>
                            <FaChevronLeft></FaChevronLeft>
                        </button>
                        {movieNowPlaying.slice(currentMovieNowPlaying-1,currentMovieNowPlaying+4).map((mNow)=>{
                            return(
                                <Col className='p-0'>
                                    <CardM id={mNow.id} title={mNow.original_title} overview={mNow.overview} image={mNow.backdrop_path} />
                                </Col>
                            );
                        })}
                        <button class="icon-effect" onClick={() => changeNextMovieNowPlaying()}>
                            <FaChevronRight></FaChevronRight>
                        </button>
                    </Row>
                </Container>
            </main> 
            <Footer />
        </>
    );
}

export default Movies;
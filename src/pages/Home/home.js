import React from 'react';
import MovieTrending from '../../components/MovieData/MovieTrending/MovieTrending';
import MoviePopular from '../../components/MovieData/MoviePopular/MoviePopular';
import GeneralCarousel from '../../components/Carousel/General-Carousel/GeneralCarousel';
import TvShowTrending from '../../components/TvShowData/TvShowTrending/TvShowTrending';
import TvShowPopular from '../../components/TvShowData/TvShowPopular/TvShowPopular';
import Navbar from '../../components/navbar/navbar'
const home = () => {
    return (
        <>
            <main className="home-background">
                <Navbar />
                <GeneralCarousel />
                <MovieTrending />
                <MoviePopular />
                <TvShowTrending />
                <TvShowPopular />
            </main> 
        </>
    );
}



export default home

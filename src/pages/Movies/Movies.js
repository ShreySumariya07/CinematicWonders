import React from 'react'
import Navbar from '../../components/navbar/navbar'
import MovieCarousel from '../../components/Carousel/Movie-Carousel/MovieCarousel'
import MovieTrending from '../../components/MovieData/MovieTrending/MovieTrending'
import MoviePopular from '../../components/MovieData/MoviePopular/MoviePopular'
import MovieTopRated from '../../components/MovieData/MoiveTopRated/MovieTopRated'
import MovieUpcoming from '../../components/MovieData/MovieUpcoming/MovieUpcoming'
import MovieNowPlaying from '../../components/MovieData/MovieNowPlaying/MovieNowPlaying'
const Movies = () => {
    return (
        <>
            <main className="home-background">
                <Navbar />
                <MovieCarousel />
                <MovieTrending />
                <MoviePopular />
                <MovieTopRated />
                <MovieUpcoming />
                <MovieNowPlaying />
            </main> 
        </>
    );
}

export default Movies
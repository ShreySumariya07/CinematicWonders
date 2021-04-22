import React from 'react'
import TvShowCarousel from '../../components/Carousel/Tv-Show-Carousel/TvShowCarousel'
import Navbar from '../../components/navbar/navbar'
import TvShowOnTheAir from '../../components/TvShowData/TvShowOnTheAir/TvShowOnTheAir'
import TvShowPopular from '../../components/TvShowData/TvShowPopular/TvShowPopular'
import TvShowTopRated from '../../components/TvShowData/TvShowTopRated/TvShowTopRated'
import TvShowTrending from '../../components/TvShowData/TvShowTrending/TvShowTrending'
const TvShows = () => {
    return (
        <>
            <main className="home-background">
                <Navbar />
                <TvShowCarousel />
                <TvShowTrending />
                <TvShowPopular />
                <TvShowTopRated />
                <TvShowOnTheAir />
            </main> 
        </>
    )
}

export default TvShows
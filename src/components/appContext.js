
import { createContext,useState,useEffect,React } from 'react';

export const AppContext = createContext();

const AppProvider = (props) =>{

    const [id,setId] = useState(234)
    const [title,setTitle] = useState("")
    const [overview,setOverview] = useState("")
    const [image,setImage] = useState("")
    const [cast,setCast] = useState([])
    const [show,setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () =>setShow(false);

    const [currentMovieTrending,setCurrentMovieTrending] = useState(1);
    const [currentMovieTopRated,setCurrentMovieTopRated] = useState(1);
    const [currentMovieNowPlaying,setCurrentMovieNowPlaying] = useState(1);
    const [currentMoviePopular,setCurrentMoviePopular] = useState(1);
    const [currentMovieUpcoming,setCurrentMovieUpcoming] = useState(1);

    const [currentTVTrending,setCurrentTVTrending]  = useState(1);
    const [currentTVPopular,setCurrentTVPopular]  = useState(1);
    const [currentTVTopRated,setCurrentTVTopRated]  = useState(1);
    const [currentTVShowOnTheAir,setCurrentTVShowOnTheAir]  = useState(1);

    const [movieTrending,setMovieTrending] = useState([]);
    const [movieUpcoming,setMovieUpcoming] = useState([]);
    const [popularMovie,setPopularMovie] = useState([]);
    const [movieNowPlaying,setMovieNowPlaying] = useState([]);
    const [movieTopRated,setMovieTopRated] = useState([]);

    const [tvTrending,setTvTrending] = useState([]);
    const [tvPopular,setTvPopular] = useState([]);
    const [tvTopRated,setTvTopRated] = useState([]);
    const [tvShowOnTheAir,setTvShowOnTheAir] = useState([]);
    
    const [trailer,setTrailer] = useState({})

    const changePrevMovieTrending = () =>{
        if(currentMovieTrending-1 <= 0){
            setCurrentMovieTrending(movieTrending.length-4)
        }
        else{
            setCurrentMovieTrending(currentMovieTrending-5)
        }
    }

    const changeNextMovieTrending = () =>{
        if(currentMovieTrending+4 >= movieTrending.length){
            setCurrentMovieTrending(1)
        }
        else{
            setCurrentMovieTrending(currentMovieTrending+5)
        }
    }

    const changePrevMoviePopular = () =>{
        if(currentMoviePopular-1 <= 0){
            setCurrentMoviePopular(popularMovie.length-4)
        }
        else{
            setCurrentMoviePopular(currentMoviePopular-5)
        }
    }

    const changeNextMoviePopular = () =>{
        if(currentMoviePopular+4 >= popularMovie.length){
            setCurrentMoviePopular(1)
        }
        else{
            setCurrentMoviePopular(currentMoviePopular+5)
        }
    }

    const changePrevMovieTopRated = () =>{
        if(currentMovieTopRated-1 <= 0){
            setCurrentMovieTopRated(movieTopRated.length-4)
        }
        else{
            setCurrentMovieTopRated(currentMovieTopRated-5)
        }
    }

    const changeNextMovieTopRated = () =>{
        if(currentMovieTopRated+4 >= movieTopRated.length){
            setCurrentMovieTopRated(1)
        }
        else{
            setCurrentMovieTopRated(currentMovieTopRated+5)
        }
    }
    
    const changePrevMovieNowPlaying = () =>{
        if(currentMovieNowPlaying-1 <= 0){
            setCurrentMovieNowPlaying(movieNowPlaying.length-4)
        }
        else{
            setCurrentMovieNowPlaying(currentMovieNowPlaying-5)
        }
    }
    
    const changeNextMovieNowPlaying = () =>{
        if(currentMovieNowPlaying+4 >= movieNowPlaying.length){
            setCurrentMovieNowPlaying(1)
        }
        else{
            setCurrentMovieNowPlaying(currentMovieNowPlaying+5)
        }
    }

    const changePrevMovieUpcoming = () =>{
        if(currentMovieUpcoming-1 <= 0){
            setCurrentMovieUpcoming(movieUpcoming.length-4)
        }
        else{
            setCurrentMovieUpcoming(currentMovieUpcoming-5)
        }
    }

    const changeNextMovieUpcoming = () =>{
        if(currentMovieUpcoming+4 >= movieUpcoming.length){
            setCurrentMovieUpcoming(1)
        }
        else{
            setCurrentMovieUpcoming(currentMovieUpcoming+5)
        }
    }

   const changePrevTVTrending = () =>{
        if(currentTVTrending-1 <= 0){
            setCurrentTVTrending(tvTrending.length-4)
        }
        else{
            setCurrentTVTrending(currentTVTrending-5)
        }
    }

    const changeNextTVTrending = () =>{
        if(currentTVTrending+4 >= tvTrending.length){
            setCurrentTVTrending(1)
        }
        else{
            setCurrentTVTrending(tvTrending+5)
        }
    }

    const changePrevTVPopular = () =>{
        if(currentTVPopular-1 <= 0){
            setCurrentTVPopular(tvPopular.length-4)
        }
        else{
            setCurrentTVPopular(currentTVPopular-5)
        }
    }

    const changeNextTVPopular = () =>{
        if(currentTVPopular+4 >= tvPopular.length){
            setCurrentTVPopular(1)
        }
        else{
            setCurrentTVPopular(tvPopular+5)
        }
    }

    const changePrevTVTopRated = () =>{
        if(currentTVTopRated-1 <= 0){
            setCurrentTVTopRated(tvTopRated.length-4)
        }
        else{
            setCurrentTVTopRated(currentTVTopRated-5)
        }
    }

    const changeNextTVTopRated = () =>{
        if(currentTVTopRated+4 >= tvTopRated.length){
            setCurrentTVTopRated(1)
        }
        else{
            setCurrentTVTopRated(tvTopRated+5)
        }
    }


    const changePrevTVShowOnTheAir = () =>{
        if(currentTVShowOnTheAir-1 <= 0){
            setCurrentTVShowOnTheAir(tvShowOnTheAir.length-4)
        }
        else{
            setCurrentTVShowOnTheAir(currentTVShowOnTheAir-5)
        }
    }

    const changeNextTVShowOnTheAir = () =>{
        if(currentTVShowOnTheAir+4 >= tvShowOnTheAir.length){
            setCurrentTVShowOnTheAir(1)
        }
        else{
            setCurrentTVShowOnTheAir(tvShowOnTheAir+5)
        }
    }

    const getTrendingMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=a7215621d52fbeb2968949767ba61258');
        const data = await response.json();
        const result = data.results;
        setMovieTrending(result);
    }

    const getUpcomingMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=a7215621d52fbeb2968949767ba61258');
        const data = await response.json();
        const result = data.results;
        setMovieUpcoming(result);
    }

    const getPopularMovies = async () =>{
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1");
        const data = await response.json();
        const result = data.results;
        setPopularMovie(result);
    }

    const getNowPlayingMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1');
        const data = await response.json();
        const result = data.results;
        setMovieNowPlaying(result);
    }

    const getTopRatedMovies = async () =>{
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=a7215621d52fbeb2968949767ba61258');
        const data = await response.json();
        const result = data.results;
        setMovieTopRated(result);
    }

    const getTrendingTV = async () =>{
        const response = await fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=a7215621d52fbeb2968949767ba61258");
        const data = await response.json();
        const result = data.results;
        setTvTrending(result);
    }

    const getPopularTV = async () =>{
        const response = await fetch("https://api.themoviedb.org/3/tv/popular?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1");
        const data = await response.json();
        const result = data.results;
        setTvPopular(result);
    }

    const getTopRatedTV = async () =>{
        const response = await fetch( "https://api.themoviedb.org/3/tv/top_rated?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1");
        const data = await response.json();
        const result = data.results;
        setTvTopRated(result);
    }

    const getShowOnTheAirTV = async () =>{
        const response = await fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=a7215621d52fbeb2968949767ba61258&language=en-US&page=1");
        const data = await response.json();
        const result = data.results;
        setTvShowOnTheAir(result);
    }
    const getMovieCast = async (id) =>{
        const reponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a7215621d52fbeb2968949767ba61258&language=en-US`);
        const data = await reponse.json();
        const result = data.cast;
        setCast(result);
    }

    const getTvCast = async (id) =>{
        const reponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=a7215621d52fbeb2968949767ba61258&language=en-US`);
        const data = await reponse.json();
        const result = data.cast;
        setCast(result);
    }

    const getTrailer = async (id) =>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a7215621d52fbeb2968949767ba61258&language=en-US`)
        const data = await response.json();
        const result = data.results[0];
        setTrailer(result);
    }

    // useEffect(() => {
    //     getPopularMovies();
    //     getTrendingMovies();
    //     getTopRatedMovies();
    //     getNowPlayingMovies();
    //     getUpcomingMovies();
    //     getTrendingTV();
    //     getPopularTV();
    //     getShowOnTheAirTV();
    //     getTopRatedTV();
    // })
    return(
        <AppContext.Provider value={{trailer,getTrailer,id,setId,cast,setCast,getMovieCast,image,setImage,overview,setOverview,title,setTitle,show,setShow,handleShow,handleClose,currentMovieTrending,currentMoviePopular,currentMovieTopRated,currentMovieUpcoming,currentMovieNowPlaying,setCurrentMovieNowPlaying,setCurrentMovieTrending,setCurrentMoviePopular,setCurrentMovieTopRated,setCurrentMovieUpcoming,changePrevMovieTrending,changePrevMoviePopular,changePrevMovieTopRated,changePrevMovieUpcoming,changePrevMovieNowPlaying,changeNextMovieTrending,changeNextMoviePopular,changeNextMovieTopRated,changeNextMovieUpcoming,changeNextMovieNowPlaying,getTrendingMovies,getPopularMovies,getTopRatedMovies,getNowPlayingMovies,getUpcomingMovies,movieTrending,popularMovie,movieUpcoming,movieTopRated,movieNowPlaying,
        currentTVTrending,currentTVPopular,currentTVTopRated,currentTVShowOnTheAir,setCurrentTVTrending,setCurrentTVPopular,setCurrentTVTopRated,setCurrentTVShowOnTheAir,changePrevTVTrending,changePrevTVTopRated,changePrevTVShowOnTheAir,changePrevTVPopular,changeNextTVTrending,changeNextTVTopRated,changeNextTVShowOnTheAir,changeNextTVPopular,getTrendingTV,getTopRatedTV,getShowOnTheAirTV,getPopularTV,getTvCast,tvTrending,tvPopular,tvTopRated,tvShowOnTheAir}}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppProvider;
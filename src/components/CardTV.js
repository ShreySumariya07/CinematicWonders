import React,{ useContext,useState } from 'react'
import { Card} from 'react-bootstrap';
import { IMAGE_BASE_URL,BACKDROP_SIZE } from '../config';
import { AppContext } from './appContext';
import '../assets/css/TvShows.css';

const CardTV = (props) => {
    const{getTrailer,trailer,setId,setImage,setOverview,setTitle,getTvCast,handleShow} = useContext(AppContext);
    return (
        <Card className="bg-dark text-white" onClick={() => {
                setId(props.id);
                setImage(props.image);
                setOverview(props.overview);
                setTitle(props.title);
                getTvCast(props.id);
                getTrailer(props.id);
                handleShow();
            }}>
            <Card.Img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.image}`} alt="Card image" />
                <div class="overlay">
                    <div class="text">Hello World</div>
                </div>
        </Card>
    )
}

export default CardTV;
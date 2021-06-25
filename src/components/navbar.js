import React,{useEffect,useState,useRef} from 'react';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import  '../assets/css/navbar.css';
const Navbar = () => {
    const[showLink,setShowLink] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    
    const toggleLinks = () => {
    setShowLink(!showLink);
    };
    
    useEffect(() => {
        const linkHeight = linksRef.current.getBoundingClientRect().height;
        if(showLink){
            linksContainerRef.current.style.height = `${linkHeight}px`;
        }
        else{
            linksContainerRef.current.style.height = '0px';
        }
    },[showLink])

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src="" alt="logo" className="logo"></img>
                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className='link-container' ref={linksContainerRef}>
                    <ul className="links" ref={linksRef} style={{listStyleType:'none'}}>
                        <li>
                            <Link to=''>Home</Link>
                        </li>
                        <li>
                            <Link to='/movies'>Movies</Link>
                        </li>
                        <li>
                            <Link to='/tvshows'>TvShows</Link>
                        </li>
                        <li>
                            <Link to='/mylist'>MyList</Link>
                        </li>
                        <li>
                            <Link to='/contactus'>ContactUs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
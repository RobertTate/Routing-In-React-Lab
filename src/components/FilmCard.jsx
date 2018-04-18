import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const styles = {
    width: '38rem',
};


const FilmCard = (props) => {

    return (

        <div className="card" style={styles}>
            <img className="card-img-top" src={logo} alt="Studio Ghibli" />
            <div className="card-body">
                <h5 className="card-title">{props.film.title}</h5>
                <p className="card-text">{props.film.description}</p>
                <Link className="button btn-primary p-3 mr-5 " to={`/Films/${props.film.id}`}>More Info</Link>            </div>
        </div>

    )
};


export default FilmCard;

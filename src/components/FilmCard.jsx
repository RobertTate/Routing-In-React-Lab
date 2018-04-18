import React from 'react';
import logo from '../assets/Studio_Ghibli.svg';
import { Link } from 'react-router-dom';


const styles = {
    width: '35rem',
};


const FilmCard = (props) => {

    return (
        <div className="container center-card">
            <div className="card" style={styles}>
                <img className="card-img-top" src={logo} alt="Studio Ghibli" />
                <div className="card-body">
                    <h5 className="card-title"><strong>{props.film.title}</strong></h5>
                    <p className="card-text">{props.film.description}</p>
                    <Link className="button btn-primary p-2 mr-5 " to={`/Films/${props.film.id}`}>More Info</Link>            </div>
            </div>
        </div>
    )
};


export default FilmCard;

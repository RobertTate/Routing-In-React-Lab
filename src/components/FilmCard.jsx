import React from 'react';
import logo from '../assets/logo.png';

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
            </div>
        </div>

    )
};


export default FilmCard;

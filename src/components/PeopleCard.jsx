import React from 'react';
import logo from '../assets/logo.png';

const styles = {
    width: '38rem',
};


const PeopleCard = (props) => {

    return (

        <div className="card" style={styles}>
            <img className="card-img-top" src={logo} alt="Studio Ghibli" />
            <div className="card-body">
                <h5 className="card-title">{props.people.name}</h5>
                <p className="card-text">Age: {props.people.age}</p>
                <p className="card-text">Gender: {props.people.gender}</p>
                <a href={props.people.url} className="btn btn-primary" target="_blank">Info Page</a>
            </div>
        </div>

    )
};


export default PeopleCard;

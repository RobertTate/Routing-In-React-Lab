import React from 'react';
import logo from '../assets/Studio_Ghibli.svg';
import { Link } from 'react-router-dom';


const styles = {
    width: '35rem',
};


const PeopleCard = (props) => {

    return (
        <div className="container center-card">
            <div className="card" style={styles}>
                <img className="card-img-top" src={logo} alt="Studio Ghibli" />
                <div className="card-body">
                    <h5 className="card-title"><strong>{props.people.name}</strong></h5>
                    <p className="card-text">Age: {props.people.age}</p>
                    <p className="card-text">Gender: {props.people.gender}</p>
                    <Link className="button btn-primary p-2 mr-5 " to={`/People/${props.people.id}`}>More Info</Link>
                </div>
            </div>
        </div>
    )
};


export default PeopleCard;

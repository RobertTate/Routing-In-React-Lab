import React, { Component, Fragment } from 'react';

class FilmID extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FilmIDs: []
        };
    }


    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
            .then((result) => result.json())
            .then((FilmIDs) => {
                this.setState({
                    FilmIDs
                })
            });
    };

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="jumbotron">
                        <h1>{this.state.FilmIDs.title}</h1>
                        <p><strong>Description:</strong> {this.state.FilmIDs.description}</p>
                        <p><strong>Director:</strong> {this.state.FilmIDs.director}</p>
                        <p><strong>Producer:</strong> {this.state.FilmIDs.producer}</p>
                        <p><strong>Release Date:</strong> {this.state.FilmIDs.release_date}</p>
                        <p><strong>Rotten Tomatoes Score:</strong> {this.state.FilmIDs.rt_score}</p>
                        <p><strong>People:</strong> <a href="https://ghibliapi.herokuapp.com/people/" target="_blank" rel="noopener noreferrer">See More</a></p>
                        <p><strong>Species:</strong> <a href="https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2" target="_blank" rel="noopener noreferrer">See More</a></p>
                        <p><strong>Locations:</strong> <a href="https://ghibliapi.herokuapp.com/locations/" target="_blank" rel="noopener noreferrer">See More</a></p>
                        <p><strong>Vehicles:</strong> <a href="https://ghibliapi.herokuapp.com/vehicles/" target="_blank" rel="noopener noreferrer">See More</a></p>
                    </div>
                </div>
            </Fragment>
        );
    }
}




export default FilmID;
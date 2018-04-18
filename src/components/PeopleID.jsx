import React, { Component, Fragment } from 'react';

class PeopleID extends Component {
    constructor(props) {
        super(props);

        this.state = {
            PeopleIDs: []
        };
    }


    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
            .then((result) => result.json())
            .then((PeopleIDs) => {
                this.setState({
                    PeopleIDs
                })
            });
    };

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="jumbotron">
                        <h1>{this.state.PeopleIDs.name}</h1>
                        <p><strong>Gender:</strong> {this.state.PeopleIDs.gender}</p>
                        <p><strong>Age:</strong> {this.state.PeopleIDs.age}</p>
                        <p><strong>Eye Color:</strong> {this.state.PeopleIDs.eye_color}</p>
                        <p><strong>Hair Color:</strong> {this.state.PeopleIDs.hair_color}</p>
                        <p><strong>Films:</strong> <a href="https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6" target="_blank" rel="noopener noreferrer">See More</a></p>
                        <p><strong>Species:</strong> <a href="https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2" target="_blank" rel="noopener noreferrer">See More</a></p>
                    </div>
                </div>
            </Fragment>
        );
    }
}




export default PeopleID;
import React, { Component, Fragment } from 'react';
import FilmCard from './FilmCard';



class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
        };
    }


    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((result) => result.json())
            .then((films) => {
                this.setState({
                    films
                })
            });
    };

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="jumbotron p-2">
                        <h1>FILMS</h1>
                    </div>
                </div>
                <div className="col">
                    {this.state.films.map((film) =>
                        <FilmCard key={film.id} film={film} />
                    )}
                </div>
            </Fragment>
        );
    }
}




export default Films;

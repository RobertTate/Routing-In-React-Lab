import React, { Component, Fragment } from 'react';
import PeopleCard from './PeopleCard';



class People extends Component {
    constructor(props) {
        super(props);

        this.state = {
            peoples: [],
        };
    }


    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then((result) => result.json())
            .then((peoples) => {
                this.setState({
                    peoples
                })
            });
    };

    render() {
        return (
            <Fragment>
                <h1>PEOPLE</h1>
                <div className="col">
                    {this.state.peoples.map((people) =>
                        <PeopleCard key={people.id} people={people} />
                    )}
                </div>
            </Fragment>
        );
    }
}




export default People;

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Films from './Films';
import People from './People';
import Home from './Home'


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="container">
                    <div className="jumbotron">
                        <img className="card-img-top m-3" src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="Studio Ghibli" />
                        <Link className="button btn-primary p-3 mr-5 " to="/home">Go Home</Link>
                        <Link className="button btn-primary p-3 mr-5 " to="/films">View Films</Link>
                        <Link className="button btn-primary p-3 mr-5 " to="/people">View People</Link>
                    </div>
                    </div>

                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/films" component={Films} />
                        <Route path="/people" component={People} />
                    </Switch>
                </Fragment>
            </Router>

        );
    }
}



export default App;

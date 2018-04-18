import React, { Component, Fragment } from 'react';



class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="jumbotron p-2">
                        <h1>HOME</h1>
                        <p>This React application uses the Studio Ghibli API to put together simple WIKI Pages for your viewing pleasure. Click on the links above to explore films by Studio Ghibli, and the Characters from those films.</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}



export default Home;

import React, { Component, Fragment } from 'react';
import './App.css';
import SearchView from './views/SearchView';
import FlightsViews from './views/FlightsView';

class App extends Component {
    constructor() {
        super();
        this.state = {
            flightData: {},
            view: 'search'
        };
    }

    onSearchSubmit = flightData => {
        this.setState({ flightData: flightData, view: 'flights' }, () => {
            console.log(this.state.flightData);
        });
    };

    render() {
        return (
            <Fragment>
                {this.state.view === 'search' ? (
                    <SearchView onAppSubmit={this.onSearchSubmit} />
                ) : (
                    <FlightsViews flightData={this.state.flightData} />
                )}
            </Fragment>
        );
    }
}

export default App;

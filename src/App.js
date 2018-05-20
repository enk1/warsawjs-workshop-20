import React, { Component } from 'react';
import './App.css';
import SearchView from './views/SearchView';

class App extends Component {
    constructor() {
        super();
        this.state = {
            flightData: {}
        };
    }
    onSearchSubmit = flightData => {
        this.setState({ flightData: flightData }, () => {
            console.log(this.state.flightData);
        });
    };
    render() {
        return (
            <div className="container">
                <SearchView onAppSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;

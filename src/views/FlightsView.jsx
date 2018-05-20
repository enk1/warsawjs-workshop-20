import React, { Component } from 'react';

class FlightsViews extends Component {
    async componentDidMount() {
        const { fromValue, toValue, departValue, returnValue } = this.props.flightData;

        const url = 'http://warsawjs-flights-api.herokuapp.com/flights';
        const fullUrl = `${url}/${departValue}/${returnValue}/${fromValue}/${toValue}`;
        const flights = await fetch(fullUrl).then(res => res.json());
        this.setState({ flights });
    }
    constructor() {
        super();
        this.state = {
            flights: []
        };
    }

    render() {
        return <div className="FlightsViews">{JSON.stringify(this.state.flights)}</div>;
    }
}

export default FlightsViews;

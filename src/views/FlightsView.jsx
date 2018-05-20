import React, { Component, Fragment } from 'react';
import Flight from '../components/Flight';

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
        const flightsMapped = this.state.flights.map(flight => <Flight key={flight.id} flight={flight} />);

        return <Fragment>{flightsMapped}</Fragment>;
    }
}

export default FlightsViews;

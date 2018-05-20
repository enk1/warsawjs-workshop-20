import React, { Component, Fragment } from 'react';
import Flight from '../components/Flight';
import FlightFilter from '../components/FlightFilter';

class FlightsViews extends Component {
    async componentDidMount() {
        const { fromValue, toValue, departValue, returnValue } = this.props.flightData;
        this.setState({
            flightsFetching: true
        });
        const url = 'https://warsawjs-flights-api.herokuapp.com/flights';
        const fullUrl = `${url}/${departValue}/${returnValue}/${fromValue}/${toValue}`;
        const flights = await fetch(fullUrl).then(res => res.json());
        this.setState({
            flights,
            flightsFetching: false
        });
    }
    constructor() {
        super();
        this.state = {
            flights: [],
            flightsFetching: false,
            priceMax: 700
        };
    }

    changeFilterValues = values => {
        this.setState(values);
    };

    render() {
        const flightsMapped = this.state.flights
            .filter(flight => !this.state.priceToggled || flight.price < +this.state.priceMax)
            .map(flight => <Flight key={flight.id} flight={flight} />);

        return (
            <Fragment>
                {this.state.flightsFetching ? <p>Loading...</p> : null}
                <FlightFilter changeFilterValues={this.changeFilterValues} />
                {flightsMapped}
            </Fragment>
        );
    }
}

export default FlightsViews;

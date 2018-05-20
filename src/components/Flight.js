import React from 'react';

const Flight = ({ flight }) => (
    <React.Fragment>
        <div>
            <p>{flight.price}$</p>
            <p>{flight.outboundPath[0].airportFrom}</p>
            <p>{flight.outboundPath[flight.outboundPath.length - 1].airportTo}</p>
        </div>
        <div>
            <p>{flight.inboundPath[0].airportFrom}</p>
            <p>{flight.inboundPath[flight.inboundPath.length - 1].airportTo}</p>
        </div>
        <hr />
    </React.Fragment>
);
export default Flight;

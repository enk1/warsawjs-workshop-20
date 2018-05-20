import React from 'react';
import styles from '../styles/Flight.css';

const Flight = ({ flight }) => (
    <div className={styles.flight}>
        <div className={styles.price}>
            <p>{flight.price}$</p>
            <p>{flight.outboundPath[0].airportFrom}</p>
            <p>{flight.outboundPath[flight.outboundPath.length - 1].airportTo}</p>
        </div>
        <div className={styles['path-back']}>
            <p>{flight.inboundPath[0].airportFrom}</p>
            <p>{flight.inboundPath[flight.inboundPath.length - 1].airportTo}</p>
        </div>
    </div>
);
export default Flight;

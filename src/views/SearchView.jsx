import React, { Component } from 'react';

import PropTypes from 'prop-types';
import styles from '../styles/SearchView.css';

class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromValue: '',
            toValue: '',
            departValue: '',
            returnValue: ''
        };
    }

    componentWillReceiveProps(props) {
        props.value = props.value || '';
        // Do something with props...
    }
    //SearchView.defaultProps = {value: ''};

    static propTypes = {
        onAppSubmit: PropTypes.func.isRequired
    };

    onToChange = e => {
        this.setState({ toValue: e.target.value }, () => {
            console.log(this.state);
        });
    };
    onFromChange = e => {
        this.setState({ fromValue: e.target.value }, () => {
            console.log(this.state);
        });
    };
    onDepartChange = e => {
        this.setState({ departValue: e.target.value }, () => {
            console.log(this.state);
        });
    };
    onReturnChange = e => {
        this.setState({ returnValue: e.target.value }, () => {
            console.log(this.state);
        });
    };
    onSubmit = event => {
        event.preventDefault();
        if (
            this.state.departValue === '' ||
            this.state.returnValue === '' ||
            this.state.fromValue === '' ||
            this.state.toValue === ''
        ) {
            console.error('blank inputs');
            return;
        }
        if (this.state.departValue === this.state.returnValue) {
            console.error('Departure airport must be different from return airport');
            return;
        }
        if (new Date(this.state.returnValue) - new Date(this.state.departValue) < 0) {
            console.error('wrong dates');
            return;
        }
        this.props.onAppSubmit({
            ...this.state
        });
    };
    render() {
        return (
            <form className={styles.form} onSubmit={this.onSubmit}>
                <label>
                    <strong>From:</strong>
                    <select value={this.state.fromValue} onChange={this.onFromChange}>
                        <option value="ATL">ATL</option>
                        <option value="WAW">WAW</option>
                    </select>
                </label>
                <label>
                    <strong>To:</strong>
                    <select value={this.state.toValue} onChange={this.onToChange}>
                        <option value="ATL">ATL</option>
                        <option value="WAW">WAW</option>
                    </select>
                </label>
                <label>
                    <strong>Depart:</strong>
                    <input type="date" value={this.state.departValue} onChange={this.onDepartChange} />
                </label>
                <label>
                    <strong>Return:</strong>
                    <input type="date" value={this.state.returnValue} onChange={this.onReturnChange} />
                </label>
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchView;

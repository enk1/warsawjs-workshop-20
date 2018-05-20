import React, { Component } from 'react';

class FlightFilter extends Component {
    constructor() {
        super();
        this.state = {
            priceToggled: false,
            priceMax: 700
        };
    }
    onChangeNumber = property => e => {
        const newState = {};
        newState[property] = e.target.value;
        this.setState(newState, () => {
            this.props.changeFilterValues({ ...this.state });
        });
    };
    onChangeCheckbox = property => e => {
        const newState = {};
        newState[property] = e.target.checked;
        this.setState(newState, () => {
            this.props.changeFilterValues({ ...this.state });
        });
    };
    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={this.state.priceToggled}
                    onChange={this.onChangeCheckbox('priceToggled')}
                />
                <input type="number" value={this.state.priceMax} onChange={this.onChangeNumbe('priceMax')} />
            </div>
        );
    }
}

export default FlightFilter;

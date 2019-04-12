import React, { Component } from 'react';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {key: 0, value: 'select an option'};
    }
    options = [{key: 0, 'value': 'first value'}, {key: 1, 'value': 'second value'}, {key: 2, 'value': 'third value'}];
    list = ['first options list details', 'second options list details', 'third options list details']
    onChange(e) {
        console.log(e.target);
        this.setState({
            key: e.target.value
        })
    }

    render() {
        return(
            <div className="form-group">
                <label htmlFor="select1">Select1</label>
                <select value={this.state.key} onChange={this.onChange.bind(this)} className="form-control">
                    {this.options.map((option) => {
                        return <option value={option.key} key={option.key} > {option.key}{option.value} </option>
                    })}
                </select>
                <div>current state => {this.state.key}{this.state.value}</div>
                <div>current state => {this.list[this.state.key]}</div>
            </div>
        )
    }
};

export default Select;


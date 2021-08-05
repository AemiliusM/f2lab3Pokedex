import React, { Component } from 'react';

class Dropdown extends Component {
    render() { 
        const { thingHappen, options, label } = this.props;
        return ( 
            <div className='dropdown-box'>
                <label>{label}</label>
                <select className='dropdown' onChange={thingHappen}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
         );
    }
}
export default Dropdown;
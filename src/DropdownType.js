import React, { Component } from 'react';

class DropdownType extends Component {
    render() { 
        const { thingHappen, options } = this.props;
        return ( 
            <div className='dropdown-box'>
                <label>Type</label>
                <select className='dropdown' onChange={thingHappen}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option === '' ? 'All' :option}</option>
                    ))}
                </select>
            </div>
         );
    }
}
export default DropdownType;
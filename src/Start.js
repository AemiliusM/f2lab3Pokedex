import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Start extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2> Welcome to PokePedia! </h2>
                <NavLink exact to ='/pokemon'>
                    Enter!
                </NavLink>
            </div>
         );
    }
}
 
export default Start;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './pokeStyles.css'

class Header extends Component {
    state = {  }
    render() { 
        return ( <Link to={`/pokemon`}>
            <span> Back to Search</span>
            </Link> );
    }
}
 
export default Header;
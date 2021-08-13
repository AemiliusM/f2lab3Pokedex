import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './pokeStyles.css'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <section className='header'>
         <NavLink to={`/pokemon`}>
            <span> Back to Search</span>
         </NavLink>
            <br/>
         <NavLink to={`/`}>
             <span> Back to Home Page</span>
         </NavLink> 
        </section> ); 
    }
}
 
export default Header;
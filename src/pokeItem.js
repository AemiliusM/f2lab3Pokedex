import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokeItem extends Component {
    state = {}
    render() { 
        const {pokemon, url_image, id } = this.props;
        return ( 
                    <Link className='pokeBox' to={`/pokemon/${id}`}>
            <div className='pokeBox'>
                    <div className='pokeBox1'>
                    <img alt={pokemon} src={url_image}/>
                </div>
                <div className='pokeBox2'>

                    <p>Pokemon: {pokemon}</p>
                   
                </div>
            </div>
                    </Link>
         );
    }
}
 
export default PokeItem;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokeItem extends Component {
    state = {}
    render() { 
        const {pokemon, ability_1, ability_2, type_1, type_2, attack, defense, speed, url_image } = this.props;
        console.log(url_image);
        return ( 
                    <Link to={`/pokemon/${this.props.character._id}`}>
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
import React, { Component } from 'react';

class PokeItem extends Component {
    state = {}
    render() { 
        const {pokemon, ability_1, ability_2, type_1, type_2, attack, defense, speed, url_image } = this.props;
        console.log(url_image);
        return ( 
            <div className='pokeBox'>
                <p>Pokemon:{pokemon}</p>
                <img alt={pokemon} src={url_image}/>
                <p>Ability1: {ability_1} Ability2: {ability_2}</p>
                <p>Type1: {type_1} Type2: {type_2}</p>
                <p>Stats: Attack: {attack} Defense: {defense} Speed: {speed}</p>
            </div>
         );
    }
}
 
export default PokeItem;
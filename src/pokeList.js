import React, { Component } from 'react';
import PokeItem from './pokeItem';

class PokeList extends Component {
    state = {  }
    render() { 
        const {thing} = this.props;
        return ( 
            <section>
                {thing.map((item, index) => {
                    return <PokeItem 
                    key={index}
                    pokemon={item.pokemon}
                    ability_1={item.ability_1}
                    ability_2={item.ability_2}
                    type_1={item.type_1}
                    type_2={item.type_2}
                    attack={item.attack}
                    defense={item.defense}
                    speed={item.speed}

                    />
                })}
            </section>
         );
    }
}
 
export default PokeList;
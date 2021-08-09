import React, { Component } from 'react';

class PokeDetail extends Component {
    state = { data:{} };

    loadPokeData = async () => {
        const { id } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ data })
    };

    componentDidMount() {
        this.loadPokeData();
    }

    render() { 
        const { data, ability_1, ability_2, type_1, type_2, attack, defense, speed } = this.state;
        return ( 
            <section>
                <h1>{data.pokmon}</h1>
                <div className='poke-detail'>
                    <img src={data.url_image} alt='poke-pic'/>
                    <p>Ability1: {ability_1} Ability2: {ability_2}</p>
                    <p>Type1: {type_1} Type2: {type_2}</p>
                    <p>Stats: Attack: {attack} Defense: {defense} Speed: {speed}</p>
                </div>
            </section>
         );
    }
}
 
export default PokeDetail;
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
        const { data } = this.state;
        return ( 
            <section>
                <h1>{data.pokmon}</h1>
                <div className='poke-detail'>
                    <img src={data.url_image} alt='poke-pic'/>
                    <p>Ability1: {data.ability_1} Ability2: {data.ability_2}</p>
                    <p>Type1: {data.type_1} Type2: {data.type_2}</p>
                    <p>Stats: Attack: {data.attack} Defense: {data.defense} Speed: {data.speed}</p>
                </div>
            </section>
         );
    }
}
 
export default PokeDetail;
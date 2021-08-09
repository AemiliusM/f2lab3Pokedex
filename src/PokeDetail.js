import React, { Component } from 'react';

class PokeDetail extends Component {
    state = { data:{} };

    loadPokeData = async () => {
        const { id } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ data })
    }

    render() { 
        return ( <h2>hi</h2> );
    }
}
 
export default PokeDetail;
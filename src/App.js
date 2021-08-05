import React, { Component } from 'react';
import fetchData from './fetchData';
import PokeList from './pokeList';

class App extends Component {
  state = { data:[], loading:true, query:null };
  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  };
  handlePoke = (event) => {
    fetchData();
    this.setState({ pokemon: event.target.value });
  };
  componentDidMount = async() => {
    const data = await fetchData();
    this.setState({data})
  }
  
  render() { 
    const { load } = this.state;
    return ( 
      <>
     <h4>Pokemon! Gotta Catch Them All!</h4>
     {load && <h2>Please Wait</h2>}
     {!load && (
       <section>
         <input onChange={this.updateQuery} type='text'></input>
         <button onClick={fetchData}>Find</button>
         <PokeList thing={this.state.data}/>
       </section>
     )}
      </>
     );
  }
}
 
export default App;

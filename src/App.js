import React, { Component } from 'react';
import Dropdown from './Dropdown';
import fetchData from './fetchData';
import PokeList from './pokeList';
import typeOptionList from './typeOptionList';

class App extends Component {
  state = { data:[], loading:true, query:'', direction:'asc', type:'All' };
  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  };
  handlePoke = async () => {
   const results = await fetchData(this.state.query, this.state.direction);
    this.setState({ data: results });
    console.log(this.state.data)
  }
  handleType = (event) => {
      this.setState({ type: event.target.value });
  } 
  handleDirection = (event) => {
    this.setState({direction: event.target.value});
  }
  
  componentDidMount = async() => {
    const data = await fetchData(this.state.query, this.state.direction);
    this.setState({data})
  }
  
  render() { 
    const { load } = this.state;
    const filterType = this.data.filter(
      (pokemon) => {
        return (this.data.type_1 === 'All' || this.data.type_1 === pokemon.type_1)
      }
    )
    return ( 
      <>
     <h4>Pokemon! Gotta Catch Them All!</h4>
     {load && <h2>Please Wait</h2>}
     {!load && (
       <section>
         <input onChange={this.updateQuery} type='text'></input>
         <button onClick={this.handlePoke}>Find</button>
         <Dropdown
         label='Direction'
         options= {[ 'asc', 'desc']}
         thingHappen={this.handleDirection}
         />
         <Dropdown  
         label='Type'
        options={typeOptionList}
        thingHappen={this.handleType}/>
         <PokeList thing= {this.state.data}/>
       </section>
     )}
      </>
     );
  }
}

 
export default App;

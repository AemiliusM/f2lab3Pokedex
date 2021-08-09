import React, { Component } from 'react';
import Dropdown from './Dropdown';
import DropdownType from './DropdownType';
import fetchData from './fetchData';
import PokeList from './pokeList';
import typeOptionList from './typeOptionList';
import './pokeStyles.css';

class PokeContainer extends Component {
  state = { data:[], loading:true, query:'', direction:'asc', type:'' };
  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  };
  handlePoke = async () => {
   const results = await fetchData(this.state.query, this.state.direction, this.state.type);
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
    this.setState({loading:false})
  }
  
  render() { 
    const {data} = this.state;
    const {loading} = this.state;
    const filterType = data.filter(
      (pokemon) => 
         pokemon.typeOptionList === this.state.typeOptionList || this.state.typeOptionList === data
      
      )
      return ( 
        <>
     <h4>Pokemon! Gotta Catch Them All!</h4>
     {loading && <image url='' >Please Wait</image>}
     {!loading && (
       <section>
         <input onChange={this.updateQuery} type='text'></input>
         <button onClick={this.handlePoke}>Find</button>
         <Dropdown
         label='Direction'
         options= {[ 'asc', 'desc']}
         thingHappen={this.handleDirection}
         />
         <DropdownType  
         label='Type'
         options={typeOptionList}
         thingHappen={this.handleType}/>
         <PokeList thing={filterType}/>
       </section>
     )}
      </>
     );
    }
  }
  
 
export default PokeContainer;

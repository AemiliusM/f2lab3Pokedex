import React, { Component } from 'react';
import Dropdown from './Dropdown';
import DropdownType from './DropdownType';
import fetchData from './fetchData';
import PokeList from './pokeList';
import typeOptionList from './typeOptionList';
import './pokeStyles.css';

class PokeContainer extends Component {
  state = { 
    data:[], 
    loading:true, 
    query:'', 
    direction:'asc', 
    type:'',
    page: 1,
    perPage: 20,
    lastPage: 1 };
    
  updateQuery = (event) => {
    this.setState({ query: event.target.value });
  };
  handlePoke = async () => {
   const {results} = await fetchData(this.state.query, this.state.direction, this.state.type, this.state.page);
    this.setState({ data: results });
  }
  handleType = (event) => {
    
      this.setState({ type: event.target.value });
  } 
  handleDirection = (event) => {
    this.setState({direction: event.target.value});
  }
  
  componentDidMount = async() => {
    const data = await fetchData(this.state.query, this.state.direction, this.state.type, this.state.page);
    console.log(data);
    const lastPage = Math.ceil(data.count / data.perPage);
    this.setState({data:data.results})
    this.setState({loading:false})
    this.setState({lastPage})
  }
  nextPage = async (lastPage) => {
      await this.setState({page: this.state.page + 1 });
      const { query, direction, type, page} = this.state
      const data = await fetchData(query, direction, type, page);
      this.setState({data:data.results})
    
  
}

prevPage = async () => {
  
  await this.setState({page: this.state.page - 1 });
  const { query, direction, type, page} = this.state
  const data = await fetchData(query, direction, type, page);
  this.setState({data:data.results})
}

lastPage = async () => {
  await this.setState({page: this.state.lastPage})
  const { query, direction, type, page} = this.state
  const data = await fetchData(query, direction, type, page);
  this.setState({data:data.results})
}

render() { 
  const {data} = this.state;
  const {loading} = this.state;
  const filterType = data.filter(
    (pokemon) => {
      return pokemon.type_1 === this.state.type || this.state.type === ''
    }
    )
      return ( 
        <>
     <h4>Pokemon! Gotta Catch Them All!</h4>
       <section className='container'>
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
         <button onClick={this.nextPage} disabled={this.state.page === this.state.lastPage} >Next Page</button>
         <button onClick={this.prevPage} disabled={this.state.page === 1} >Prev Page</button>
         <button onClick={this.lastPage}>Last Page</button>
        </section>
        {loading && <section className='loading' >Please Wait</section>}
        {!loading && (
          <section>
            <PokeList thing={filterType}/>
          </section>)
        
     }
      </>
     );
    }
  }
  
 
export default PokeContainer;

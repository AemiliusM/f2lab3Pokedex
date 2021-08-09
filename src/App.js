import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PokeContainer from './PokeContainer';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <section>
        <BrowserRouter>
        <PokeContainer/>
        </BrowserRouter>
      </section>
    )}
}
 
export default App;
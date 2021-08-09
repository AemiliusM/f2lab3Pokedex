import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import PokeContainer from './PokeContainer.js';
import PokeDetail from './PokeDetail.js';
import Start from './Start.js';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <section>
        <BrowserRouter>
        <Header/>
        <Switch>
        <Route path='/pokemon/:id' component={PokeDetail} />
        <Route path='/pokemon' component={PokeContainer} />
        <Route path= '/' component={Start}/>
        </Switch>
        </BrowserRouter>
      </section>
    )}
}
 
export default App;
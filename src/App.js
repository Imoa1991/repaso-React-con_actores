import React, { Component } from 'react';
import './styles/main.css';
import Home from './components/Home';
import People from './components/People';
import Actor from './components/Actor';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      actor:'',
      actorsFromAPI: []
    }

    this.search=this.search.bind(this);
    this.saveInput=this.saveInput.bind(this);
  }
  search() {
    fetch('https://api.tvmaze.com/search/people?q=' + this.state.actor.toLowerCase())
    .then(response => {
      return response.json();
    })
    .then(apiResponse => {
      this.setState({
        actorsFromAPI: apiResponse
      })
    })
  }
  saveInput(e) {
    let value = e.currentTarget.value.toLowerCase();
    this.setState({
      actor: value
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' render={() =>
               <Home search={this.search} saveInput={this.saveInput} actor={this.state.actor} actorsFromAPI={this.state.actorsFromAPI}/>
             } />
            <Route path='/actor/:id' render={(props) =>
               <Actor match={props.match} actorsFromAPI={this.state.actorsFromAPI}/>
             } />
          </Switch>
      </div>
    );
  }
}

export default App;

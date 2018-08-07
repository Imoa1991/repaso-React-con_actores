import React from 'react';
import Searcher from './Searcher';
import People from './People';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="title">Buscador de actores</h1>
        <Searcher search={this.props.search} saveInput={this.props.saveInput} actor={this.props.actor}/>
        <People actorsFromAPI={this.props.actorsFromAPI} />
      </React.Fragment>
      );
  }
}

export default Home;

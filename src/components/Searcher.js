import React from 'react';

class Searcher extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input class="series" placeholder="Dora" type="text" onChange={this.props.saveInput} actor={this.props.actor} />
        <button class="button" name="button" type="button" onClick={this.props.search}>Search</button>
      </React.Fragment>
      );
  }
}

export default Searcher;

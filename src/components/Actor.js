import React from 'react';
import ActorItem from './ActorItem';

class Actor extends React.Component {
  constructor(props) {
    super(props);
    let filterId = parseInt(this.props.match.params.id, 10);
    this.actor = this.props.actorsFromAPI.filter(actor=>{
      if(parseInt(actor.person.id, 10)=== filterId){
        return true;
      } else {
        return false;
      }
    })
  }
  render() {
    return (
      <ActorItem actorData={this.actor[0]} />
      );
  }
}

export default Actor;

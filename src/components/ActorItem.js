import React from 'react';

class ActorItem extends React.Component {
  getImage(actorData) {
    if (actorData.person.image === null){
      return <img className="poster" src='https://via.placeholder.com/210x295/FFE4C4/008B8B/?text=TV' alt="poster"/>
    } else {
      return <img className="poster" src={this.props.actorData.person.image.medium} alt="poster"/>
    }
  }
  render() {
    return (
      <div className="container">
        <h2 className="name">{this.props.actorData.person.name}</h2>
        {this.getImage(this.props.actorData)}
        <p className="date">{this.props.actorData.person.birthday}</p>
      </div>
      );
  }
}

export default ActorItem;

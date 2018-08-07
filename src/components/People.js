import React from 'react';
import { Link } from 'react-router-dom';
import ActorItem from './ActorItem';

class People extends React.Component {

  render() {
    return (
      <ul class="ul">
        {
          this.props.actorsFromAPI.map(actorData =>
            <Link to={`/actor/${actorData.person.id}`}>
              <li className="list">
                <ActorItem actorData={actorData} />
              </li>
            </Link>
          )
        }
      </ul>
      );
  }
}

export default People;

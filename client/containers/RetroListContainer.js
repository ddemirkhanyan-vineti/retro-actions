import React from 'react';

import RetroItem from '../components/RetroItem';

class RetroListContainer extends React.Component {
  render() {
    return (
      <div className="column is-4 messages hero is-fullheight">
        <div id="inbox-messages" className="inbox-messages">
          <RetroItem />
          <RetroItem />
          <RetroItem />
        </div>
      </div>
    );
  }
}

export default RetroListContainer;
import React from 'react';

import RetroItem from '../components/RetroItem';

const RetroContainter = () => (
  <div id="message-feed" className="column is-4 messages hero is-fullheight">
    <div id="inbox-messages" className="inbox-messages">
      <RetroItem />
    </div>
  </div>
)

export default RetroContainter;
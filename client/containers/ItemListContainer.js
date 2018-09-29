import React from 'react';

import ItemContent from '../components/ItemContent';

class ItemListContainer extends React.Component {
  render() {
    console.log('list container');
    return (
      <div className="column is-6 message hero is-fullheight">
        <div className="box message-preview">
          <div className="top">
            <div className="avatar">
              <img src="https://placehold.it/128x128" />
            </div>
            <div className="address">
              <div className="name">John Smith</div>
              <div className="email">someone@gmail.com</div>
            </div>
            <hr/>
            <ItemContent />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemListContainer;
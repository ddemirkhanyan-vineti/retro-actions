import React from 'react';

import ItemContent from '../components/ItemContent';
class ItemDetails extends React.Component {
  render() {
    const {filter} = this.props;

    const itemList = (
      <div className="column is-6 message hero is-fullheight" id="message-pane">
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

    return filter === 'add-retro' ? null : itemList;
  }
}

export default ItemDetails;
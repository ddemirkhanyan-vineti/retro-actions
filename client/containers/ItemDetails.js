import React from 'react';

import ItemContent from '../components/ItemContent';
import InputWithSelect from '../components/base/input_with_select';
class ItemDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      actionOwner: 'Please select an action owner',
      actionItem: ''
    }
  }

  onSelect(value) {
    this.setState({actionOwner: value})
  }

  onChange(value) {
    this.setState({actionItem: value})
  }

  render() {
    const {filter, options} = this.props;
    const {actionOwner, actionItem} = this.state;

    const itemList = (
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

    const retroAdd = (
      <div className="column is-6 messages hero is-fullheight">
        <InputWithSelect
          label="Action Item"
          placeholder="Please add an action item"
          value={actionOwner}
          options={options}
          onChange={(value) => this.onChange(value)}
          onSelect={(value) => this.onSelect(value)}
        />
      </div>
    );

    return filter === 'add-retro' ? retroAdd : itemList;
  }
}

export default ItemDetails;
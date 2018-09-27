import React from 'react';

import RetroItem from '../components/RetroItem';
class RetroContainter extends React.Component {
  render() {
    const {filter} = this.props;

    const retroList = (
      <div id="message-feed" className="column is-4 messages hero is-fullheight">
        <div id="inbox-messages" className="inbox-messages">
          <RetroItem />
          <RetroItem />
          <RetroItem />
        </div>
      </div>
    );

    const retroAdd = (
      <div id="message-feed" className="column is-4 messages hero is-fullheight">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Title</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" placeholder="Please enter retro title"/>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Master</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" placeholder="Please enter retro master"/>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Actions</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input className="input" type="text" placeholder="Please enter retro master"/>
              </p>
            </div>
          </div>
        </div>
      </div>
    )

    return filter === 'add-retro' ? retroAdd : retroList;
  }
}

export default RetroContainter;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => (
  <aside className="column is-2 aside hero is-fullheight">
    <div>
      <div className="compose has-text-centered">
        <a className="button is-danger is-block is-bold">
          <span className="compose">Add Retro</span>
        </a>
      </div>
      <div className="main">
        <a href="#" className="item">
          <span className="icon">
            <FontAwesomeIcon icon="list-ul"/>
          </span>
          <span className="name">Retro List</span>
        </a>
        <a href="#" className="item active">
          <span className="icon">
            <FontAwesomeIcon icon="star"/>
          </span>
          <span className="name">My Action Items</span>
        </a>
        <a href="#" className="item">
          <span className="icon">
            <FontAwesomeIcon icon="users"/>
          </span>
          <span className="name">Users Management</span>
        </a>
      </div>
    </div>
  </aside>
)

export default Sidebar;
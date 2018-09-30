import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom'

const Sidebar = ({ addRetro }) => (
  <aside className="column is-2 aside hero is-fullheight">
    <div>
      <div className="compose has-text-centered">
        <NavLink to="add-retro" className="button is-danger is-block is-bold">
          <span className="compose">Add Retro</span>
        </NavLink>
      </div>
      <div className="main">
        <NavLink to="" className="item">
          <span className="icon">
            <FontAwesomeIcon icon="list-ul"/>
          </span>
          <span className="name">Retro List</span>
        </NavLink>
        <NavLink to="items" className="item">
          <span className="icon">
            <FontAwesomeIcon icon="star"/>
          </span>
          <span className="name">My Action Items</span>
        </NavLink>
        <NavLink to="users" className="item">
          <span className="icon">
            <FontAwesomeIcon icon="users"/>
          </span>
          <span className="name">Users Management</span>
        </NavLink>
      </div>
    </div>
  </aside>
)

export default Sidebar;
import React from 'react';

const Sidebar = () => (
  <aside className="column is-2 aside hero is-fullheight">
    <div>
      <div className="compose has-text-centered">
        <a className="button is-danger is-block is-bold"><span className="compose">Add Retro</span></a>
      </div>
      <div className="main">
        <a href="#" className="item active">
          <span className="icon"><i className="fa fa-star"></i></span>
          <span className="name">Inbox</span>
        </a>
        <a href="#" className="item">
          <span className="icon"><i className="fa fa-star"></i></span>
          <span className="name">Starred</span>
        </a>
        <a href="#" className="item">
          <span className="icon"><i className="fa fa-envelope-o"></i></span>
          <span className="name">Sent Mail</span>
        </a>
      </div>
    </div>
  </aside>
)

export default Sidebar;
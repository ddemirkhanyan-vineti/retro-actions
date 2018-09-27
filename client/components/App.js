import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import RetroContainer from '../containers/RetroContainer';
import ItemDetails from '../containers/ItemDetails';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faListUl, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faStar, faListUl, faUsers);

const App = ({ match: { params } }) => (
  <div>
    <Navbar />
    <div className="columns">
      <Sidebar />
      <RetroContainer filter={params.filter}/>
      <ItemDetails filter={params.filter}/>
    </div>
  </div>
)

export default App;
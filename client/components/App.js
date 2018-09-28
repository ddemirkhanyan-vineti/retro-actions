import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import RetroContainer from '../containers/RetroContainer';
import ItemDetails from '../containers/ItemDetails';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faListUl, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faStar, faListUl, faUsers);

const OPTIONS = [
  {
    id: 1, value: 'Konstantin Sargsyan'
  },
  {
    id: 2, value: 'Nare Zakaryan'
  },
  {
    id: 3, value: 'Tigran Astvatsatryan'
  }
];

const App = ({ match: { params } }) => (
  <div>
    <Navbar />
    <div className="columns">
      <Sidebar />
      <RetroContainer filter={params.filter} options={OPTIONS}/>
      <ItemDetails filter={params.filter} options={OPTIONS}/>
    </div>
  </div>
)

export default App;
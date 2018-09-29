import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import RetroListContainer from '../containers/RetroListContainer';
import ItemListContainer from '../containers/ItemListContainer';
import RetroAddContainer from '../containers/RetroAddContainer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faListUl, faUsers, faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faStar, faListUl, faUsers, faAngleDown);

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

class App extends React.Component {
  render() {
    const {match} = this.props;
    let content;

    if(match.params.filter === 'add-retro') {
      content = <RetroAddContainer options={OPTIONS}/>
    } else {
      content = (
        <div className="columns">
          <RetroListContainer options={OPTIONS}/>
          <ItemListContainer options={OPTIONS}/>
        </div>
      )
    }

    return (
      <div>
        <Navbar />
        <div className="columns">
          <Sidebar />
          { content }
        </div>
      </div>
    );
  }
}

export default App;
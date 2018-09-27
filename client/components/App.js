import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';

import RetroContainer from '../containers/RetroContainer';
import VisibleTodoList from '../containers/VisibleTodoList';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faListUl, faUsers } from '@fortawesome/free-solid-svg-icons';

library.add(faStar, faListUl, faUsers);

const App = () => (
  <div>
    <Navbar />
    <div className="columns">
      <Sidebar />
      <RetroContainer />
    </div>
  </div>
)

export default App;
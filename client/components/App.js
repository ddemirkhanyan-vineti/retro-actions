import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';

import RetroContainer from '../containers/RetroContainer';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <Navbar />
    <div className="columns">
      <Sidebar />
      <RetroContainer />
    </div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;
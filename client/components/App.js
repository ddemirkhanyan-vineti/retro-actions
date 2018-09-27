import React from 'react';
import { connect } from 'react-redux';
import { addRetro } from '../actions';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';

import RetroContainer from '../containers/RetroContainer';
import ItemDetails from '../containers/ItemDetails';
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
      <ItemDetails />
    </div>
  </div>
)

const mapDispatchToProps = dispatch => ({
  addRetro: () => dispatch(addRetro())
})

export default connect(
  mapDispatchToProps
)(App)
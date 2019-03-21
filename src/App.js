import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import MiddleBar from './components/MiddleBar';
import CoursesContainer from './components/CoursesContainer';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MiddleBar />
        <CoursesContainer />
      </div>
    );
  }
}

export default App;

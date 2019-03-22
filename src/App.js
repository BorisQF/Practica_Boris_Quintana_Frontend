import React, { Component } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import MiddleBar from './components/MiddleBar';
import CoursesContainer from './components/CoursesContainer';


class App extends Component {

  constructor(){
    super();
    this.state = {
      courseSearch: null
    }
  }
  
  getCourseSearch = (courseSearch) => {
    this.setState({
      courseSearch
    });
  }

  render() {
    const { courseSearch } = this.state;
    return (
      <div>
        <NavBar />
        <MiddleBar getCourseSearch={this.getCourseSearch}/>
        {courseSearch != null ? <CoursesContainer courseSearch={courseSearch}/> : <CoursesContainer /> }
        
      </div>
    );
  }
}

export default App;

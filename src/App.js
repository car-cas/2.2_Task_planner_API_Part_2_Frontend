import React from 'react';
import { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import {NewTask} from "./components/NewTask";


class App extends Component{
  constructor(props) {
      super(props);   
  }
  render(){
    const NewTaskView = () => (
      <NewTask />
    );
    return(
      <Router>
        <div className="App">
          <Home/>
          <Route exact path="/NewTask" component={NewTaskView} />
        </div>
      </Router>
    )
  }
}

export default App;

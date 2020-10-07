import React from 'react';
import { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import {NewTask} from "./components/NewTask";
import axios from 'axios';

class App extends Component{
  constructor(props) {
      super(props);
      this.state={items:[]}
      this.handleSubmit = this.handleSubmit.bind(this);   
  }

  handleSubmit(e) {
    axios.post("https://taskplanner-ieti.azurewebsites.net/api/add-task?code=W1TwNlFITqPsWbiM1QVs86baaOezxCajA4z/zY4DFcpfs6PQKwSG7g==",
                { e }).then(res=> alert(res.id));
    this.setState(state => ({
        items: state.items.concat(e)
    }));
  }   

  render(){
    const NewTaskView = () => (
      <NewTask />
    );
    return(
      <Router>
        <div className="App">
          <Home handleSubmit={this.handleSubmit} />
          <Route exact path="/NewTask" component={NewTaskView} />
        </div>
      </Router>
    )
  }
}

export default App;

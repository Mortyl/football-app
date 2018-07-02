import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//importing components from their suitable root directeries
import Header from './Components/Header';
import Form from './Components/Form';


class App extends Component {
  render() {
    return (
      //Using React.Fragments let you group a list of children without adding extra nodes to the DOM.
      <React.Fragment>
      <Header />
      <Form />
      </React.Fragment>
    );
  }
}

export default App;

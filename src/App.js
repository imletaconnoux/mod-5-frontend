import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YoutubeContainer from './components/YoutubeContainer.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav'
import { Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">

          <Route path="/" component={Nav} />

        <YoutubeContainer />
      </div>
    );
  }
}

export default App;

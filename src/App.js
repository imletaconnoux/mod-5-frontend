import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YoutubeContainer from './components/Youtube/YoutubeContainer.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav'
import { Route } from 'react-router-dom'
import { fetchCollections } from './actions/collections'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'
import CollectionsContainer from './components/Collections/CollectionsContainer.js'
class App extends Component {

  componentDidMount(){

    this.props.fetchCollections()
  }
  render() {
    console.log(this.props)

    return (
      <div className="App">

          <Route path="/" component={Nav} />

        <YoutubeContainer />
        <CollectionsContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCollections: () => {
      dispatch(fetchCollections())
    }
  }
}


export default connect(null, mapDispatchToProps)(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YoutubeContainer from './components/Youtube/YoutubeContainer.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav'
import { Route, Redirect, Link} from 'react-router-dom'
import { fetchCollections } from './actions/collections'
import { connect } from 'react-redux'
import thunk from 'redux-thunk'
import CollectionsContainer from './components/Collections/CollectionsContainer.js'
import UsersContainer from './components/Users/UsersContainer.js'

class App extends Component {

  componentDidMount(){
    console.log("Mounting")
    //this.props.fetchCollections()
  }
  render() {


    console.log("Rendering",this.props)

    return (

      <div className="App">





        <Route path="/" component={Nav}/>
        <Route path="/" component={ YoutubeContainer } />
        <Route path="/collections" component={ CollectionsContainer } />
        <UsersContainer />



      </div>
    );
  }
}







export default App;
// export default App

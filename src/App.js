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
import FollowingsContainer from './components/Followings/FollowingsContainer.js'
import UsersContainer from './components/Users/UsersContainer.js'
import Authorize from './components/Authorize'

class App extends Component {


  render() {

    const AuthCollectionsContainer = Authorize(CollectionsContainer)
    const AuthUsersContainer = Authorize(UsersContainer)

    return (

      <div className="App">

          <Route path="/" component={Nav}/>
          <Route path="/" component={ YoutubeContainer } />
          <Route path="/collections" render={(props) => <AuthCollectionsContainer {...props} /> }/>
          <Route path="/following" render={(props) => <FollowingsContainer {...props} /> }/>
          <Route path="/" render={(props) => <AuthUsersContainer {...props} /> }/>



      </div>
    )
  }
}







export default App;
// export default App

import React, { Component } from 'react';
import './App.css';
import YoutubeContainer from './components/Youtube/YoutubeContainer.js'
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav'
import { Route} from 'react-router-dom'
import CollectionsContainer from './components/Collections/CollectionsContainer.js'
import FollowingsContainer from './components/Followings/FollowingsContainer.js'
import UsersContainer from './components/Users/UsersContainer.js'
import Authorize from './components/Authorize'
import TopicsContainer from './components/Topics/TopicsContainer.js'

class App extends Component {


  render() {

    const AuthCollectionsContainer = Authorize(CollectionsContainer)
    const AuthUsersContainer = Authorize(UsersContainer)
    const AuthTopicsContainer = Authorize(TopicsContainer)

    return (

      <div className="App">
        <Route path="/" component={Nav}/>
        <div className="app-body">
          <Route exact path="/" component={ YoutubeContainer } />
          <Route path="/collections" render={(props) => <AuthCollectionsContainer {...props} /> }/>
          <Route path="/following" render={(props) => <FollowingsContainer {...props} /> }/>
          <Route path="/" render={(props) => <AuthUsersContainer {...props} /> }/>
          <Route path="/topics" render={(props) => <AuthTopicsContainer {...props} />} />
        </div>
      </div>
    )
  }
}







export default App;
// export default App

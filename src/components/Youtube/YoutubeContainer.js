import React from 'react'
import YoutubeForm from './YoutubeForm'
import { Grid, List, Loader, Header, Icon, Divider} from 'semantic-ui-react'
import { connect } from 'react-redux'
import YoutubeSearchList from './YoutubeSearchList'
import { Route } from 'react-router-dom'
import CollectionsSearchList from './CollectionsSearchList'

class YoutubeContainer extends React.Component {




  render(){
    console.log("USER IN YOUTUBE CONATINER", this.props.user)
    console.log("YOUTUBE CONTAINER STATE", this.props)
    return (
      <div>
        <Route exact path="/" component={YoutubeForm}/>
        <Route exact path="/" render={(props) => <CollectionsSearchList collections={this.props.collectionsResults} {...props}/> } />
        <Divider hidden />
        <Route exact path="/" render={(props) => <YoutubeSearchList videos={this.props.youtubeResults} {...props}/> } />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    youtubeResults: state.youtube.youtubeResults,
    collectionsResults: state.youtube.collectionsResults,
    isSearching: state.youtube.isSearching,
    user: state.user.currentUser

  }
}



export default connect(mapStateToProps)(YoutubeContainer)

import React from 'react'
import YoutubeForm from './YoutubeForm'
import { Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import YoutubeSearchList from './YoutubeSearchList'
import { Route } from 'react-router-dom'
import CollectionsSearchList from './CollectionsSearchList'

class YoutubeContainer extends React.Component {




  render(){
    const link = 'http://www.coolpicking.com/wp-content/uploads/2015/01/TV-ADVERTS.jpg'
    if (this.props.collectionsResults.length > 0  || this.props.youtubeResults.length > 0 ) {
      return (
        <div>
          <Route exact path="/" component={YoutubeForm}/>
          <Divider hidden />
          <Route exact path="/" render={(props) => <CollectionsSearchList collections={this.props.collectionsResults} {...props}/> } />
          <Divider hidden />
          <Route exact path="/" render={(props) => <YoutubeSearchList videos={this.props.youtubeResults} {...props}/> } />
        </div>
      )
    } else {
      return (

        <div className="landing-image">
          <Route exact path="/" component={YoutubeForm}/>

        </div>
      )
    }
  }
}

function mapStateToProps(state){
  return {
    youtubeResults: state.youtube.youtubeResults,
    collectionsResults: state.youtube.collectionsResults,
    isSearching: state.youtube.isSearching

  }
}



export default connect(mapStateToProps)(YoutubeContainer)

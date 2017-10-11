import React from 'react'
import YoutubeForm from './YoutubeForm'
import { Grid, List, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux'
import YoutubeSearchList from './YoutubeSearchList'
import { Route } from 'react-router-dom'

class YoutubeContainer extends React.Component {


  render(){
    console.log(this.props)
    return (
      <div>
        <YoutubeForm/>
        <YoutubeSearchList videos={this.props.searchResults}/>

      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    searchResults: state.videos.searchResults,
    isSearching: state.videos.isSearching
  }
}



export default connect(mapStateToProps)(YoutubeContainer)

import React from 'react'
import YoutubeForm from './YoutubeForm'
import { Grid, List, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux'
import YoutubeSearchList from './YoutubeSearchList'
import { Route } from 'react-router-dom'
import { fetchCollections } from '../../actions/collections'

class YoutubeContainer extends React.Component {

  componentDidMount() {
    this.props.fetchCollections()
  }


  render(){
    console.log(this.props)
    return (
      <div>
        <Route exact path="/" component={YoutubeForm}/>
        <Route exact path="/" render={(props) => <YoutubeSearchList videos={this.props.searchResults} {...props}/> } />



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

function mapDispatchToProps(dispatch){
  return {
    fetchCollections: () => {
      dispatch(fetchCollections())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(YoutubeContainer)

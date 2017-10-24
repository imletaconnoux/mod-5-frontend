import React from 'react'
import {connect} from 'react-redux'
import { searchTopicVideos } from '../../actions/topics'
import YoutubeSearchList from '../Youtube/YoutubeSearchList'
import TopicForm from './TopicForm'

class TopicVideos extends React.Component{

  componentDidMount(){
    this.props.searchTopicVideos(this.props.topic.topicId, "relevance")
  }

  render(){

    if (this.props.videos) {
      return(
        <div>

          <YoutubeSearchList videos={this.props.videos}/>
        </div>
      )
    } else {
      null
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    searchTopicVideos: (topicId, sort) => {
      dispatch(searchTopicVideos(topicId, sort))
    }
  }
}

function mapStateToProps(state){
  return{
    videos: state.topics.results
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopicVideos)

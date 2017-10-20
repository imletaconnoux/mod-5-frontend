import React from 'react'
import { connect } from 'react-redux'
import { Modal, Form, TextArea, Button, Header, Segment, Popup, Icon } from 'semantic-ui-react'
import { updateVideoComment } from '../../actions/collections'
import { fetchRelatedVideos } from '../../actions/youtube'
import RelatedVideosList from './RelatedVideosList'

import RelatedVideoLink from './RelatedVideoLink'

class VideoOverlay extends React.Component{

  constructor(){
    super()
    this.state = {
      video: null
    }
  }

  componentDidMount(){
    if (this.props.video.youtube_id) {
    this.props.fetchRelatedVideos(this.props.video.youtube_id)
    } else if (this.props.video.id.videoId) {
    this.props.fetchRelatedVideos(this.props.video.id.videoId)
    }
  }


  handleVideoClick = (video) => {
    this.setState({
      video: video
    })
  }

  render(){
    if (this.state.video === null && this.props.relatedVideos.length > 0 ) {
      const link = `https://www.youtube.com/embed/${this.props.relatedVideos[0].id.videoId}`
    return(
      <RelatedVideoLink link={link} relatedVideos={this.props.relatedVideos} video={this.props.relatedVideos[0]} handleVideoClick={this.handleVideoClick} />
    )
  } else if (this.state.video !== null && this.props.relatedVideos.length > 0 )  {
      const link = `https://www.youtube.com/embed/${this.state.video.id.videoId}`
    return(
      <RelatedVideoLink link={link} relatedVideos={this.props.relatedVideos} video={this.state.video} handleVideoClick={this.handleVideoClick} />
    )

  } else {
    return(
      null
    )
  }
  }

}

function mapDispatchToProps(dispatch){
  return {
    fetchRelatedVideos: (youtubeId) => {
      dispatch(fetchRelatedVideos(youtubeId))
    }
  }
}

function mapStateToProps(state){
  return{
    relatedVideos: state.youtube.relatedVideos
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoOverlay)

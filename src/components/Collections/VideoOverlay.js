import React from 'react'
import { connect } from 'react-redux'
import { Modal, Form, TextArea, Button, Header, Segment } from 'semantic-ui-react'
import { updateVideoComment } from '../../actions/collections'
import { fetchRelatedVideos } from '../../actions/youtube'
import RelatedVideosList from './RelatedVideosList'

class VideoOverlay extends React.Component{

  constructor(){
    super()
    this.state = {
      videoComment: ""
    }
  }

  componentDidMount(){

    this.setState({
      videoComment: this.props.video.comment
    })

    this.props.fetchRelatedVideos(this.props.video.youtube_id)
  }

  handleTextInput = (event) => {
    event.preventDefault()
    this.setState({
      videoComment: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateVideoComment(this.props.video.id, this.state.videoComment, this.props.collection.id)
  }

  render(){
    console.log("RELATED VIDEOS", this.props.relatedVideos)
    const link = `https://www.youtube.com/embed/${this.props.video.youtube_id}`
    return(
      <Segment>
          <Header> {this.props.video.title} </Header>
        <Modal.Content wrapped aligned="center" scrolling>
        <iframe wrapped width="560" height="315" aligned="center" src={link} frameBorder="0" allowFullScreen></iframe>
          <Modal.Description>
            <Header> Related Videos: </Header>
            <RelatedVideosList relatedVideos={this.props.relatedVideos} />



          </Modal.Description>
          <Modal.Description>
            <p>Video Comments:</p>
              <Form onSubmit={this.handleSubmit}>
                <TextArea onChange={this.handleTextInput} value={this.state.videoComment} />
                <Button primary>Update</Button>
              </Form>
          </Modal.Description>
        </Modal.Content>
      </Segment>


    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    updateVideoComment: (id, comment, collection_id) => {
      dispatch(updateVideoComment(id, comment, collection_id))
    },
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

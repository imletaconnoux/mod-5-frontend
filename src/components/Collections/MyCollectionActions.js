import React from 'react'
import { Divider, Grid, Segment, Icon, Header, Modal, Form, TextArea, Button } from 'semantic-ui-react'
import { removeVideoFromCollection } from '../../actions/collections'
import { connect } from 'react-redux'
import VideoOverlay from './VideoOverlay'
import { updateComment } from '../../actions/comments'
import { clearRelatedVideos } from '../../actions/youtube'





class Video extends React.Component {

  constructor(){
    super()
    this.state = {
      videoComment: ""
    }
  }

  componentDidMount(){

    this.setState({
      videoComment: this.props.comment.body
    })

  }

  closeModal = (event) => {
    event.preventDefault()
    this.props.clearRelatedVideos()
  }

  handleTextInput = (event) => {
    event.preventDefault()
    this.setState({
      videoComment: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateComment(this.props.comment.id, this.state.videoComment)
  }

  handleDelete = (event) => {
    event.preventDefault()
    this.props.removeVideoFromCollection(this.props.collection, this.props.video)
  }

  render(){

    const link = `https://www.youtube.com/embed/${this.props.video.youtube_id}`

    return(
      <Grid.Column width={11} centered>
      <Segment raised>
        <Segment as='h3' >
        {this.props.video.title}
        </Segment>
        <Segment.Group horizontal>
            <Segment>
              <iframe aligned="center" width="560" height="315" src={link}
                frameBorder="0"
                allowFullScreen title="Video"></iframe>
            </Segment>
            <Segment>
                <Header size='em'>Your video comments:</Header>
                <Form onSubmit={this.handleSubmit}>
                  <TextArea autoHeight style={{ minHeight: 250 }} onChange={this.handleTextInput} value={this.state.videoComment} />
                  <Divider hidden />
                  <Button primary>Update</Button>
                </Form>
              </Segment>
          </Segment.Group>
      <Segment.Group horizontal raised>
          <Segment>
            <Modal trigger={
              <p>Related Videos <Icon name="video play outline" size="medium" color="red"/></p>
            }
              onClose={this.closeModal}>
              <VideoOverlay collection={this.props.collection} video={this.props.video}/>
            </Modal>

          </Segment>
          <Segment onClick={this.handleDelete}>
            <p>Remove <Icon name="delete" size="medium" color="red"/> </p>
          </Segment>

      </Segment.Group>
    </Segment>
    </Grid.Column>
    )
  }

}

function mapDispatchToProps(dispatch){
  return{
    removeVideoFromCollection: (collection, video) => {
      dispatch(removeVideoFromCollection(collection, video))
    },
    updateComment: (id, body) => {
      dispatch(updateComment(id, body))
    },
    clearRelatedVideos: () => {
      dispatch(clearRelatedVideos())
    }
  }
}

function mapStateToProps(state){
  return{
    relatedVideos: state.youtube.relatedVideos,
    user: state.user.currentUser
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Video)

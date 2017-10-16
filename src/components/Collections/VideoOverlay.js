import React from 'react'
import { connect } from 'react-redux'
import { Modal, Icon, Form, TextArea, Button, Header } from 'semantic-ui-react'
import { updateVideoComment } from '../../actions/collections'

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
  }

  handleTextInput = (event) => {
    event.preventDefault()
    this.setState({
      videoComment: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props)
    console.log(this.props.collection)
    this.props.updateVideoComment(this.props.video.id, this.state.videoComment, this.props.collection.id)
  }

  render(){
    const link = `https://www.youtube.com/embed/${this.props.video.youtube_id}`
    console.log(this.props)
    return(
      <div>
        <Header>
          {this.props.video.title}
        </Header>
        <Modal.Content wrapped aligned="center">
        <iframe wrapped width="560" height="315" aligned="center" src={link} frameBorder="0" allowFullScreen></iframe>
          <Modal.Description>
            <p>Video Comments:</p>
              <Form onSubmit={this.handleSubmit}>
                <TextArea onChange={this.handleTextInput} value={this.state.videoComment} />
                <Button primary>Update</Button>
              </Form>
          </Modal.Description>
        </Modal.Content>
      </div>


    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    updateVideoComment: (id, comment, collection_id) => {
      dispatch(updateVideoComment(id, comment, collection_id))
    }
  }
}

export default connect(null, mapDispatchToProps)(VideoOverlay)

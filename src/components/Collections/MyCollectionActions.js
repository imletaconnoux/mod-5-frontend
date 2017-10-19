import React from 'react'
import { Segment, Container, Card, Icon, Header, Modal } from 'semantic-ui-react'
import { removeVideoFromCollection } from '../../actions/collections'
import { connect } from 'react-redux'
import VideoOverlay from './VideoOverlay'
import { currentUser } from '../../actions/users'

class Video extends React.Component {

  handleDelete = (event) => {
    event.preventDefault()
    this.props.removeVideoFromCollection(this.props.collection, this.props.video)
  }

  render(){

    const link = `https://www.youtube.com/embed/${this.props.video.youtube_id}`


    return(
      <Segment>
        <Segment as='h3' >
        {this.props.video.title}
        </Segment>
        <Segment.Group horizontal>
          <div className="ui internally celled grid">
            <div className="row">
              <div className="ten wide column">
                <img src={this.props.video.thumbnail}/>
              </div>
              <div className="six wide column">
                <Header size='em'>Your video comments:</Header>

                <p> {this.props.video.comment} </p>
              </div>
            </div>
          </div>
      </Segment.Group>
      <Segment.Group horizontal compact>
          <Segment>
            <Modal trigger={
              <p>Watch Video <Icon name="video play outline"/> and Edit Comments  <Icon name="video play edit"/> </p>
            } >
              <VideoOverlay collection={this.props.collection} video={this.props.video}/>
            </Modal>

          </Segment>
          <Segment onClick={this.handleDelete}>
            <p>Remove <Icon name="delete"/> </p>
          </Segment>
          <Segment>
            <p>Email <Icon name="send outline"/> </p>
          </Segment>
      </Segment.Group>
    </Segment>
    )
  }

}

function mapDispatchToProps(dispatch){
  return{
    removeVideoFromCollection: (collection, video) => {
      dispatch(removeVideoFromCollection(collection, video))
    }
  }
}


export default connect(null, mapDispatchToProps)(Video)

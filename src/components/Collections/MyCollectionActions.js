import React from 'react'
import { Grid, Segment, Container, Card, Icon, Header, Modal } from 'semantic-ui-react'
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
      <Grid.Column width={8} centered>
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
      <Segment.Group horizontal raised>
          <Segment>
            <Modal trigger={
              <p>Watch Video and Related Videos<Icon name="video play outline" size="medium" color="red"/> and Edit Comments  <Icon name="edit" size="medium" color="red"/> </p>
            } >
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
    }
  }
}

function mapStateToProps(state){
  return{
    relatedVideos: state.youtube.relatedVideos
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Video)

import React from 'react'
import PopUp from './PopUp'
import { Grid, Card, Button, Icon, Divider, Segment, Popup, Form, Modal} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createCollectionWithVideo } from '../../actions/collections'
import { fetchCollections } from '../../actions/collections'
import VideoOverlay from '../Collections/VideoOverlay'
import { clearRelatedVideos } from '../../actions/youtube'

class YoutubeItem extends React.Component{

  componentDidMount() {
    this.props.fetchCollections()
  }

  closeModal = (event) => {
    event.preventDefault()
    this.props.clearRelatedVideos()
  }

  render(){
    const link = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
    return (
      <Grid.Column width={9} centered>
        <Segment textAlign='center'>
          <Segment as='h3'> {this.props.video.snippet.title}</Segment>
          <iframe aligned="center" width="560" height="315" src={link}
          frameBorder="0"
          allowFullScreen></iframe>
          <Segment.Group raised horizontal>
            <Segment>
              Add to personal collection
              <Popup
                trigger={<Icon name="plus square outline" size="big" color="red"/>}
                size='huge'
                hoverable
              >
                <Form>
                  <Form.Field>
                    <label>Save to an existing collection:</label>
                  </Form.Field>
                  <PopUp collections={this.props.collections} video={this.props.video} />

                </Form>
              </Popup>
            </Segment>
            <Segment >
              <Modal trigger={
              <label>View related videos <Icon name="video play outline" size="medium" color='red'/></label>
              }
              onClose={this.closeModal}>
              <VideoOverlay video={this.props.video}/>
              </Modal>
            </Segment>
          </Segment.Group>
        </Segment>
      </Grid.Column>
    )
  }
}

function mapStateToProps(state){
  return{
    collections: state.collections.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCollections: () => {
      dispatch(fetchCollections())
    },
    clearRelatedVideos: () => {
      dispatch(clearRelatedVideos())
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(YoutubeItem)

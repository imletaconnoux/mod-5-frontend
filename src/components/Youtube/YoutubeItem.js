import React from 'react'
import PopUp from './PopUp'
import { Grid, Icon, Segment, Popup, Form, Modal} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchCollections } from '../../actions/collections'
import VideoOverlay from '../Collections/VideoOverlay'
import { clearRelatedVideos } from '../../actions/youtube'
import '../../App.css'

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
      <Grid.Row>
      <Grid.Column width={8} centered>
        <Segment textAlign='center' raised>
          <Segment as='h3'> {this.props.video.snippet.title}</Segment>
          <iframe aligned="center" width="560" height="315" src={link}
          frameBorder="0"
          allowFullScreen title="Video"></iframe>
          <Segment.Group raised horizontal>
            <Segment>
              Add to personal collection
              <Popup
                trigger={<Icon name="plus square outline" size="big" color="red"/>}
                size='big'
                hoverable
                className="Popup"
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
              <label>Related Videos <Icon name="video play outline" size="medium" color='red'/></label>
              }
              onClose={this.closeModal}>
              <VideoOverlay video={this.props.video}/>
              </Modal>
            </Segment>
          </Segment.Group>
        </Segment>
      </Grid.Column>
      </Grid.Row>
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

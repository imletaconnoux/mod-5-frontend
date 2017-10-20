import React from 'react'
import PopUp from './PopUp'
import { Grid, Card, Button, Icon, Divider, Segment, Popup, Form} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createCollectionWithVideo } from '../../actions/collections'
import { fetchCollections } from '../../actions/collections'

class YoutubeItem extends React.Component{

  componentDidMount() {
    this.props.fetchCollections()
  }


  render(){
    const link = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
    return (
      <Grid.Column width={9} centered>
        <iframe aligned="center" width="560" height="315" src={link}
        frameBorder="0"
        allowFullScreen></iframe>
        <Segment raised>
        {this.props.video.snippet.title}
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
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(YoutubeItem)

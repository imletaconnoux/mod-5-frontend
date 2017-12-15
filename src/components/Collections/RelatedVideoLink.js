import React from 'react'
import { Modal, Form, Grid, Header, Segment, Popup, Icon } from 'semantic-ui-react'
import RelatedVideosList from './RelatedVideosList'
import PopUp from '../Youtube/PopUp'
import { connect } from 'react-redux'

class RelatedVideoLink extends React.Component{

  render(){

    return(

      <Segment>
        <Modal.Content aligned="center" scrolling>
        <Header>Related Videos: </Header>
        <Grid textAlign='center'>
          <Grid.Column width={13} centered>
          <Segment textAlign='center'>
          <Segment as='h3'> {this.props.video.snippet.title} </Segment>
        <iframe wrapped width="560" height="315" verticallyAligned="center" src={this.props.link} frameBorder="0" allowFullScreen title="Video"></iframe>
          <Segment raised>
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
          </Segment>
        </Grid.Column>
        </Grid>

          <Modal.Description>

            <RelatedVideosList relatedVideos={this.props.relatedVideos} handleVideoClick={this.props.handleVideoClick}/>
          </Modal.Description>
        </Modal.Content>
      </Segment>
    )

  }

}

function mapSateToProps(state){
  return {
    collections: state.collections.list
  }
}

export default connect(mapSateToProps)(RelatedVideoLink)

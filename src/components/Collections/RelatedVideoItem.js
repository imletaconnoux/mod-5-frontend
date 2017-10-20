import React from 'react'
import { Grid, Segment, Image, Modal} from 'semantic-ui-react'
import YoutubeItem from '../Youtube/YoutubeItem'

class RelatedVideoItem extends React.Component{

  render() {
    console.log(this.props)
    console.log(this.props.video)
    console.log(this.props.video.snippet.thumbnails)
    return(
      <Grid.Column width={5} centered>
        <Segment textAlign='center'>
          <Modal trigger={
            <div>
              <Image src={this.props.video.snippet.thumbnails.medium.url} size='medium' bordered centered/>
              <Segment textAlign='center'>
                <p>{this.props.video.snippet.title}</p>
              </Segment>
            </div>
            }>
            <YoutubeItem video={this.props.video}/>
          </Modal>
        </Segment>
      </Grid.Column>
    )
  }

}

export default RelatedVideoItem

import React from 'react'
import { Grid, Segment, Image, Icon} from 'semantic-ui-react'



class RelatedVideoItem extends React.Component{

  handleClick = (event) => {
    event.preventDefault()
    this.props.handleVideoClick(this.props.video)
  }

  render() {
    return(
      <Grid.Column width={5} centered>
        <Segment textAlign='center' onClick={this.handleClick}>
            <div>
              <Image src={this.props.video.snippet.thumbnails.medium.url} size='medium' bordered centered/>
              <Segment textAlign='center'>
                <p>{this.props.video.snippet.title} <Icon name="video play outline" size="medium" color='red'/></p>
              </Segment>
            </div>

        </Segment>
      </Grid.Column>
    )
  }

}

export default RelatedVideoItem

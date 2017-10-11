import React from 'react'
import { Card, Button, Icon, Divider, Segment} from 'semantic-ui-react'

class YoutubeItem extends React.Component{

  render(){
    console.log(this.props)

    const link = `https://www.youtube.com/embed/${this.props.video.id.videoId}`

    console.log(link)
    return (
      <div>

        <iframe aligned="center" width="560" height="315" src={link}
        frameBorder="0"
        allowFullScreen></iframe>


        <Segment raised>
        {this.props.video.snippet.title}
        <Icon name="bookmark"/>
        </Segment>

        <Divider clearing />
      </div>
    )
  }
}

export default YoutubeItem

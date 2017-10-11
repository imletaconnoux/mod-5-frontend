import React from 'react'
import { Card, Button, Icon } from 'semantic-ui-react'

class YoutubeItem extends React.Component{

  render(){
    console.log(this.props)

    const link = `https://www.youtube.com/embed/${this.props.video.id.videoId}`

    console.log(link)
    return (
      <div>
        <Card>
          <Card.Content>
          <iframe width="560" height="315" src={link}
          frameBorder="0"
          allowFullScreen></iframe>
            <Card.Header> {this.props.video.snippet.title}</Card.Header>
          </Card.Content>
          <Card.Content extra>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default YoutubeItem

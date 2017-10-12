import React from 'react'
import { Container, Card, Icon, Header } from 'semantic-ui-react'


class Video extends React.Component {

  render(){

    console.log(this.props)
    const link = `https://www.youtube.com/embed/${this.props.video.youtube_id}`


    return(
      <div>
        <Header as='h3' attached='top'>
        {this.props.video.title}
        </Header>
        <Container attached>
          <div class="ui internally celled grid">
            <div class="row">
              <div class="ten wide column">
                <img src={this.props.video.thumbnail}/>
              </div>
              <div class="six wide column">
                <Header size='em'>Your video comments:</Header>

                <p> {this.props.video.comment} </p>



              </div>
            </div>
          </div>
      </Container>
    </div>
    )
  }

}

export default Video

import React from 'react'
import PopUp from './PopUp'
import { Card, Button, Icon, Divider, Segment, Popup, Form} from 'semantic-ui-react'
import { connect } from 'react-redux'

class YoutubeItem extends React.Component{

  render(){
    console.log(this.props)

    const link = `https://www.youtube.com/embed/${this.props.video.id.videoId}`



    return (
      <div>

        <iframe aligned="center" width="560" height="315" src={link}
        frameBorder="0"
        allowFullScreen></iframe>


        <Segment raised>
        {this.props.video.snippet.title}
          <Popup
            trigger={<Icon name="bookmark" />}
            hoverable
          >
            <Form>
              <PopUp collections={this.props.collections} video={this.props.video} />
            </Form>
          </Popup>
        </Segment>


        <Divider clearing />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    collections: state.collections.list
  }
}



export default connect(mapStateToProps)(YoutubeItem)

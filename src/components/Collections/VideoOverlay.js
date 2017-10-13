import React from 'react'
import { connect } from 'react-redux'
import { Modal, Icon } from 'semantic-ui-react'

class VideoOverlay extends React.Component{

  constructor(){
    super()
    this.state = {
      videoComment: ""
    }
  }

  componentDidMount(){
    this.setState({
      videoComment: this.props.video.comment
    })
  }

  render(){

    console.log(this.props)
    return(
      <Modal.Header> Hello from the overlay  </Modal.Header>


    )
  }

}

export default VideoOverlay

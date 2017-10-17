import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addVideo, removeVideoFromCollection } from '../../actions/collections'


class PopUpItem extends React.Component {

//state should probably be higher up
  constructor(){
    super()
    this.state= {
      collection: false,
      databaseVideo: null
    }
  }

  componentDidMount(){

    const video = this.props.collection.videos.filter((video) => {
        return (video.title === this.props.video.snippet.title)
    })

    if (video.length > 0 ) {
      this.setState({
        collection: true,
        databaseVideo: video[0]
      })
    }
  }




  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      collection: !this.state.collection
    })
    if (this.state.collection === false ) {
      this.props.addVideo(this.props.video, this.props.collection)
    } else {

      this.props.removeVideo(this.props.collection, this.state.databaseVideo)

    }

  }

  render(){
    return(
        <Form.Field>
            <Checkbox
              label={this.props.collection.name}
              checked={this.state.collection}
              value={this.props.collection}
              onClick={this.handleChange}
            />
        </Form.Field>
      )
  }

}


function mapDispatchToProps(dispatch){
  return {
    addVideo: (video, collection) => {
    dispatch(addVideo(video, collection))
    },
    removeVideo: (collection, video) => {
      dispatch(removeVideoFromCollection(collection,video))
    }
  }
}

export default connect(null, mapDispatchToProps)(PopUpItem)

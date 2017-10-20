import React from 'react'
import { Segment, Container, Card, Icon, Header, Grid } from 'semantic-ui-react'
import { removeVideoFromCollection } from '../../actions/collections'
import { connect } from 'react-redux'
import VideoOverlay from './VideoOverlay'
import { currentUser } from '../../actions/users'
import MyCollectionActions from './MyCollectionActions'
import FollowCollectionActions from './FollowCollectionActions'

class Video extends React.Component {

  componentDidMount(){
    if (this.props.user === null ){
      this.props.currentUser()
    }
  }

  render(){
    console.log(this.props.collection, this.props.user)
    const link = `https://www.youtube.com/embed/${this.props.video.youtube_id}`

    if (this.props.user && this.props.collection.user.id === this.props.user.id){
      return(
        <Grid.Row>
          <MyCollectionActions video={this.props.video} collection={this.props.collection}/>
        </Grid.Row>
      )
    } else if (this.props.user && this.props.collection.user.id !== this.props.user.id){
      return(
        <Grid.Row>
           <FollowCollectionActions video={this.props.video} collection={this.props.collection}/>
        </Grid.Row>
      )
    }
    else {
      return(
        <p>Currently loading</p>
      )
    }
  }

}

function mapDispatchToProps(dispatch){
  return{
    removeVideoFromCollection: (collection, video) => {
      dispatch(removeVideoFromCollection(collection, video))
    },
    currentUser: () => {
      dispatch(currentUser())
    }
  }
}

function mapStateToProps(state){
  return {
    user: state.user.currentUser
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Video)

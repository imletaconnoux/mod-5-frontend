import React from 'react'
import {  Grid } from 'semantic-ui-react'
import { removeVideoFromCollection } from '../../actions/collections'
import { connect } from 'react-redux'
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


    if (this.props.user && this.props.collection.user.id === this.props.user.id){
      return(
        <Grid.Row>
          <MyCollectionActions comment={this.props.comment} video={this.props.video} collection={this.props.collection}/>
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
        null
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

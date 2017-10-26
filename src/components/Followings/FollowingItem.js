import React from 'react'
import { Grid, Card, Button, Icon, Image, Segment, Form, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UnfollowActions from './UnfollowActions'
import FollowActions from './FollowActions'
import { currentUser } from '../../actions/users'
import CollectionItem from '../Collections/CollectionItem'
import { fetchFollowings } from '../../actions/followings'

class FollowingItem extends React.Component{

  componentDidMount(){
    if (this.props.following.length === 0 ) {
      this.props.fetchFollowings()
    }
    if (this.props.user === null) {
      this.props.currentUser()
    }
  }


  render(){

    if (this.props.user){
      const followingCollection = this.props.following.filter((collection) => collection.id === this.props.collection.id)
      if (followingCollection.length > 0) {
        return(
          <UnfollowActions collection={this.props.collection}/>
        )
      } else if (this.props.collection.user.id === this.props.user.id){
        return (
          null
        )
      }
      else {
        return(
          <FollowActions collection={this.props.collection}/>
        )
      }
    } else {
      return(
        (null)
      )
    }
  }

}

function mapDispatchToProps(dispatch){
  return {
    currentUser: () => {
      dispatch(currentUser())
    },
    fetchFollowings: () => {
      dispatch(fetchFollowings())
    }
  }
}

function mapStateToProps(state){
  return {
    user: state.user.currentUser,
    following: state.following.list
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FollowingItem)

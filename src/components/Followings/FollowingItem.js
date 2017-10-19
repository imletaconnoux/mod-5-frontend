import React from 'react'
import { Grid, Card, Button, Icon, Image, Segment, Form, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import UnfollowActions from './UnfollowActions'
import FollowActions from './FollowActions'
import { currentUser } from '../../actions/users'

class FollowingItem extends React.Component{

  componentDidMount(){
    if (this.props.user === null) {
      this.props.currentUser()
    }
  }


  render(){

    if (this.props.user){
      const followingCollection = this.props.collection.followers.filter((user) => user.id === this.props.user.id)
      if (followingCollection.length > 0) {
        return(
          <UnfollowActions collection={this.props.collection}/>
        )
      } else {
        return(
          <FollowActions collection={this.props.collection}/>
        )
      }
    } else {
      return(
        <div>
          Loading
        </div>
      )
    }
  }

}

function mapDispatchToProps(dispatch){
  return {
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
export default connect(mapStateToProps, mapDispatchToProps)(FollowingItem)

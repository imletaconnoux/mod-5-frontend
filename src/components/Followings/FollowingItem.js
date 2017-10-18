import React from 'react'
import { Grid, Card, Button, Icon, Image, Segment, Form, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { unfollow } from '../../actions/followings'

class FollowingItem extends React.Component{

  handleUnfollow = (event) => {
    console.log("CLICK", this.props.following)
    this.props.unfollow(this.props.following)
  }

  render(){
    return(
      <Grid.Column width={5} centered>
        <Segment textAlign='center'>
          <Link to={"/following/" + this.props.following.id}>
            <Image
              src={this.props.following.image}
              size='medium'
              bordered
              centered
              label={{ as: 'a', color: 'red', content: `${this.props.following.name} by ${this.props.following.user.name}`, ribbon: true }}
            />


          </Link>
          <Segment.Group horizontal>

              <Segment textAlign='center'>
                <Link to={"/following/" + this.props.following.id}>
                  <p>View <Icon name="object group"/> </p>
                </Link>
              </Segment>
              <Segment onClick={this.handleUnfollow} textAlign='center'>
                <p>Unfollow <Icon name="delete"/> </p>
              </Segment>
          </Segment.Group>
        </Segment>


      </Grid.Column>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    unfollow: (collection) => {
      dispatch(unfollow(collection))
    }
  }
}

export default connect(null, mapDispatchToProps)(FollowingItem)

import React from 'react'
import { Grid, Card, Button, Icon, Image, Segment, Form, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { unfollow } from '../../actions/followings'


class FollowingItem extends React.Component{


  handleUnfollow = (event) => {
    console.log("CLICK", this.props.collection)
    this.props.unfollow(this.props.collection)
  }

  render(){
    console.log("UNFOLLOW CONTAINER", this.props)
    return(
      <Grid.Column width={5} centered>
        <Segment textAlign='center'>
          <Link to={"/collections/" + this.props.collection.id}>
            <Image
              src={this.props.collection.image}
              size='medium'
              bordered
              centered
              label={{ as: 'a', color: 'red', content: `${this.props.collection.name} by ${this.props.collection.user.name}`, ribbon: true }}
            />
          </Link>
          <Segment.Group horizontal>

              <Segment textAlign='center'>
                <Link to={"/collections/" + this.props.collection.id}>
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

import React from 'react'
import { Grid, Icon, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { follow } from '../../actions/followings'


class FollowingItem extends React.Component{


  handleFollow = (event) => {
    console.log("FOLLOW", this.props.collection)
    this.props.follow(this.props.collection)

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
              label={{ as: 'a', color: 'red', content: `${this.props.collection.name} Collection by ${this.props.collection.user.name}`, ribbon: true }}
            />
          </Link>
          <Segment.Group horizontal>

              <Segment textAlign='center'>
                <Link to={"/collections/" + this.props.collection.id}>
                  <p>View <Icon name="object group"/> </p>
                </Link>
              </Segment>
              <Segment onClick={this.handleFollow} textAlign='center'>
                <p>Follow <Icon name="checkmark"/> </p>
              </Segment>
          </Segment.Group>
        </Segment>
      </Grid.Column>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    follow: (collection) => {
      dispatch(follow(collection))
    }
  }
}

export default connect(null, mapDispatchToProps)(FollowingItem)

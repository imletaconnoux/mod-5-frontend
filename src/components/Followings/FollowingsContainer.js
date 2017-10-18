import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchFollowings } from '../../actions/followings'
import FollowingsList from './FollowingsList'
import { Header, Icon, Divider } from 'semantic-ui-react'

class FollowingsContainer extends React.Component{


  componentDidMount(){
    this.props.fetchFollowings()
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <Header as='h2' icon>
          <Icon name='video play outline' color='red' />
          Collections I Follow
          <Header.Subheader>
            Browse your favorite collections from other users
          </Header.Subheader>
        </Header>
        <Route exact path="/following" render={(props) => <FollowingsList following={this.props.following} {...props} />}/>
      </div>
    )
  }


}

function mapStateToProps(state){
  return{
    following: state.following.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchFollowings: () => {
      dispatch(fetchFollowings())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingsContainer)

import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchFollowings } from '../../actions/followings'
import FollowingsList from './FollowingsList'
import { Header, Icon, Divider } from 'semantic-ui-react'
import FollowingDetail from '../Followings/FollowingDetail'

class FollowingsContainer extends React.Component{


  componentDidMount(){
    this.props.fetchFollowings()
  }

  render(){
    console.log(this.props)
    return(
      <div>
        <Route exact path="/following" render={(props) => <FollowingsList collections={this.props.following} {...props} />}/>
        <Route path="/following/:id" render={(routeProps) => {
          const id = routeProps.match.params.id
          const collection = this.props.following.filter((collection) => {
            return collection.id === parseInt(id)
          })
          return <FollowingDetail collection={collection[0]} {...routeProps}/>
          }} />
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

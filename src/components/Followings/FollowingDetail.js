import React from 'react'
import { connect } from 'react-redux'
import { fetchFollowings, fetchAllCollections } from '../../actions/followings'
import FollowingVideos from './FollowingVideos'


class FollowingDetail extends React.Component{



  componentDidMount(){
    this.props.fetchFollowings()
    this.props.fetchAllCollections()
  }


  render(){

    if (this.props.allCollections.length > 0){
      const collection = this.props.following.filter((collection) => {

        return collection.id === parseInt(this.props.match.params.id)
      })
      console.log(collection)
      return (
        <div>
          <h1>The {collection[0].name} collection by {collection[0].user.name}</h1>
          <FollowingVideos videos={collection[0].videos}/>

        </div>
        )
    }  else {
      return (
        null
      )
    }
  }

}

function mapStateToProps(state){
  return {
    following: state.following.list,
    allCollections: state.following.allCollections
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchFollowings: () => {
      dispatch(fetchFollowings())
    },
    fetchAllCollections: () => {
      dispatch(fetchAllCollections())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingDetail)

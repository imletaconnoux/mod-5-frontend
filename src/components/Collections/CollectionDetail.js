import React from 'react'

import CollectionVideos from './CollectionVideos'
import { connect } from 'react-redux'
import { fetchCollections } from '../../actions/collections'
import { fetchAllCollections } from '../../actions/followings'
import { currentUser } from '../../actions/users'


class CollectionDetail extends React.Component{



  componentDidMount(){
    this.props.fetchAllCollections()
  }


  render(){
    console.log(this.props)
    if (this.props.allCollections.length > 0){
      const collection = this.props.allCollections.filter((collection) => {

        return collection.id === parseInt(this.props.match.params.id)
      })
      console.log(collection)
      return (
        <div>
          <h1> The {collection[0].name} video collection </h1>
          <CollectionVideos videos={collection[0].videos} collection={collection[0]}/>
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
    allCollections: state.following.allCollections,
    user: state.user.currentUser,
    currentUserCollections: state.collections.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchAllCollections: () => {
      dispatch(fetchAllCollections())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetail)

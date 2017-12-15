import React from 'react'
import CollectionVideos from './CollectionVideos'
import { connect } from 'react-redux'
import { fetchAllCollections } from '../../actions/followings'
import { Header, Icon } from 'semantic-ui-react'
import { fetchUserComments } from '../../actions/comments'

class CollectionDetail extends React.Component{



  componentDidMount(){
    this.props.fetchUserComments()
    this.props.fetchAllCollections()
  }


  render(){

    if (this.props.allCollections.length > 0 && this.props.userComments.length > 0 ){
      const collection = this.props.allCollections.filter((collection) => {

        return collection.id === parseInt(this.props.match.params.id, 10)
      })

      return (
        <div>
          <Header as='h1'><Icon name='video play outline' color='red' />{collection[0].name}</Header>
          <CollectionVideos comments={this.props.userComments} videos={collection[0].videos} collection={collection[0]}/>
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
    currentUserCollections: state.collections.list,
    userComments: state.comments.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchAllCollections: () => {
      dispatch(fetchAllCollections())
    },
    fetchUserComments: () => {
      dispatch(fetchUserComments())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetail)

import React from 'react'

import CollectionVideos from './CollectionVideos'
import { connect } from 'react-redux'
import { fetchCollections } from '../../actions/collections'
class CollectionDetail extends React.Component{



  componentDidMount(){
    this.props.fetchCollections()
  }


  render(){
    if (this.props.collections.length > 0 ){
      const collection = this.props.collections.filter((collection) => {
        return collection.id === parseInt(this.props.match.params.id)
      })
      return (
        <div>
          <h1> Your {collection[0].name} video collection </h1>
          <CollectionVideos videos={collection[0].videos} collection={collection[0]}/>
        </div>
        )
    } else {
      return(
        null
      )
    }
  }

}

function mapStateToProps(state){
  return {
    collections: state.collections.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCollections: () => {
      dispatch(fetchCollections())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetail)

import React from 'react'

import CollectionVideos from './CollectionVideos'

class CollectionDetail extends React.Component{



  render(){
    console.log(this.props)

    const { collection }  = this.props.collection
    return (
      <div>
        <h1> Your {this.props.collection.name} video collection </h1>
        <CollectionVideos videos={this.props.collection.videos}/>


      </div>
    )
  }

}

export default CollectionDetail

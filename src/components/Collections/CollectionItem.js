import React from 'react'

class CollectionItem extends React.Component{

  render(){
    return(
      <li>{this.props.collection.name}</li>
    )
  }

}

export default CollectionItem

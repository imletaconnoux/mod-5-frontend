import React from 'react'
import CollectionItem from './CollectionItem'
const CollectionsList = (props) => {

  console.log(props)
  const collections = props.collections.map((collection, index) => {
        return ( <CollectionItem key={index} collection={collection} />)
  })


  return (

    <div>
      <ul>
      {collections}
      </ul>
    </div>
  )

}

export default CollectionsList

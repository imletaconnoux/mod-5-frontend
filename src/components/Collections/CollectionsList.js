import React from 'react'
import CollectionItem from './CollectionItem'
import { Grid } from 'semantic-ui-react'

const CollectionsList = (props) => {


  const collections = props.collections.map((collection, index) => {
        return ( <CollectionItem key={index} collection={collection} />)
  })


  return (

    <Grid centered>

      {collections}

   </Grid>
  )

}

export default CollectionsList

import React from 'react'
import CollectionItem from './CollectionItem'
import { Grid } from 'semantic-ui-react'

const CollectionsList = (props) => {

  console.log(props)


  const collections = props.collections.map((collection, index) => {
        return ( <CollectionItem key={index} collection={collection} />)
  })


  return (

    <Grid>

      {collections}

   </Grid>
  )

}

export default CollectionsList

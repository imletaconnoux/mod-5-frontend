import React from 'react'
import CollectionItem from './CollectionItem'
import { Container, Grid } from 'semantic-ui-react'

const CollectionsList = (props) => {


  const collections = props.collections.map((collection, index) => {
        return ( <CollectionItem key={index} collection={collection} />)
  })


  return (
    <Container>
    <Grid stackable columns={2} centered>


      {collections}
   </Grid>
   </Container>
  )

}

export default CollectionsList

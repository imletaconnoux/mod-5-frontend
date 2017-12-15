import React from 'react'
import FollowingItem from '../Followings/FollowingItem'
import { Grid } from 'semantic-ui-react'

const CollectionsSearchList = (props) => {


  const collections = props.collections.map((collection, index) => {
        return ( <FollowingItem key={index} collection={collection} />)
  })

  if (collections.length > 0 ) {
    return (
        <div>

          <Grid centered>
            {collections}

          </Grid>
        </div>

    )
  } else {
    return (
      null
    )
  }



}



export default CollectionsSearchList

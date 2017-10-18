import React from 'react'
import FollowingItem from '../Followings/FollowingItem'
import { Grid, Header, Icon } from 'semantic-ui-react'

const CollectionsSearchList = (props) => {

  console.log(props)

  const collections = props.collections.map((collection, index) => {
        return ( <FollowingItem key={index} collection={collection} />)
  })

  if (collections.length > 0) {
    return (
        <div>
          <Header.Subheader>
            Browse collections from other users
          </Header.Subheader>
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

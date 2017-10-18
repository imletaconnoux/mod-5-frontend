import React from 'react'
import FollowingItem from './FollowingItem'
import { Grid } from 'semantic-ui-react'

const FollowingsList = (props) => {

  console.log(props)

  const followings = props.following.map((following, index) => {
        return ( <FollowingItem key={index} following={following} />)
  })


  return (
      <Grid centered>
        {followings}

      </Grid>

  )



}



export default FollowingsList

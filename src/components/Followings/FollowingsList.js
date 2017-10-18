import React from 'react'
import FollowingItem from './FollowingItem'
import { Grid, Header, Icon } from 'semantic-ui-react'

const FollowingsList = (props) => {

  console.log(props)

  const followings = props.collections.map((collection, index) => {
        return ( <FollowingItem key={index} collection={collection} />)
  })


  return (
      <div>
      <Header as='h2' icon>
        <Icon name='video play outline' color='red' />
        Collections I Follow
        <Header.Subheader>
          Browse your favorite collections from other users
        </Header.Subheader>
      </Header>
        <Grid centered>
          {followings}

        </Grid>
      </div>

  )



}



export default FollowingsList

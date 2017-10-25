import React from 'react'
import FollowingItem from './FollowingItem'
import { Grid, Header, Icon, Container } from 'semantic-ui-react'

const FollowingsList = (props) => {


  const followings = props.collections.map((collection, index) => {
        return ( <FollowingItem key={index} collection={collection} />)
  })

  return (

      <div>
      <Header as='h2' icon>
        <Icon name='video play outline' color='red' />
        Browse your favorite collections from other users
      </Header>
        <Container>
          <Grid centered>
            {followings}
          </Grid>
        </Container>
      </div>

  )



}



export default FollowingsList

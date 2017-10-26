import React from 'react'
import FollowingItem from './FollowingItem'
import { Grid, Header, Icon, Container, Divider } from 'semantic-ui-react'

const FollowingsList = (props) => {


  const followings = props.collections.map((collection, index) => {
        return ( <FollowingItem key={index} collection={collection} />)
  })

  return (

      <Container>
      <Header as='h1'><Icon name='video play outline' color='red' />Saved collections from other users</Header>
      <Divider section />

          <Grid centered padded>
            {followings}
          </Grid>

      </Container>

  )



}



export default FollowingsList

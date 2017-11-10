import React from 'react'
import { Container, Header, Icon, Grid, Divider } from 'semantic-ui-react'
import TopicItem from './TopicItem'

const TopicsList = (props) => {


  const topics = props.topics.map((topic, index) => {
        return ( <TopicItem key={index} topic={topic} />)
  })


  return (
    <Container>
      <Header as='h1'>
        <Icon name='video play outline' color='red' />
        Browse by Topic
      </Header>
      <Divider section />
      <Grid centered padded>

        {topics}

      </Grid>
    </Container>
  )

}

export default TopicsList

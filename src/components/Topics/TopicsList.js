import React from 'react'
import { Header, Icon, Grid } from 'semantic-ui-react'
import TopicItem from './TopicItem'

const TopicsList = (props) => {


  const topics = props.topics.map((topic, index) => {
        return ( <TopicItem key={index} topic={topic} />)
  })


  return (
    <div>
      <Header as='h1' icon>
        <Icon name='video play outline' color='red' />
        Browse Videos by Topics!
      </Header>

      <Grid centered>

        {topics}

      </Grid>
    </div>
  )

}

export default TopicsList

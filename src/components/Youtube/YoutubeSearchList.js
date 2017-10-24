import React from 'react'
import YoutubeItem from './YoutubeItem'
import { Grid } from 'semantic-ui-react'

const YoutubeSearchList = (props) => {

  console.log(props.videos)
  const youtubeItems = props.videos.map((video, index) => {
    return <YoutubeItem key={index} video={video}/>
  })

  return (
    <Grid textAlign='center' columns={1}>
      <Grid.Row>
      {youtubeItems}
      </Grid.Row>
    </Grid>
  )
}

export default YoutubeSearchList

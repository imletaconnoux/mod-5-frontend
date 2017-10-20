import React from 'react'
import YoutubeItem from './YoutubeItem'
import { Grid } from 'semantic-ui-react'

const YoutubeSearchList = (props) => {

  const youtubeItems = props.videos.map((video, index) => {
    return <YoutubeItem key={index} video={video}/>
  })

  return (
    <Grid textAlign='center'>
      {youtubeItems}
    </Grid>
  )
}

export default YoutubeSearchList

import React from 'react'
import Video from './Video'
import { Grid } from 'semantic-ui-react'

const CollectionVideos = (props) => {

  const videoList = props.videos.map((video, index) => {
    return <Video video={video} key={index} collection={props.collection} />
  })
  return (

    <Grid textAlign='center' columns={1}>
      {videoList}
    </Grid>
  )
}


export default CollectionVideos

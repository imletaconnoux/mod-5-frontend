import React from 'react'
import { Grid } from 'semantic-ui-react'
import RelatedVideoItem from './RelatedVideoItem'

const RelatedVideosList = (props) => {


  const relatedItems = props.relatedVideos.map((video, index) => {
    return <RelatedVideoItem video={video} key={index} handleVideoClick={props.handleVideoClick}/>
  })

  return (
    <Grid textAlign='center'>
      {relatedItems}
    </Grid>
  )
}

export default RelatedVideosList

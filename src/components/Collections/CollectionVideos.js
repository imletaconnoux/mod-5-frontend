import React from 'react'
import Video from './Video'
import { Container } from 'semantic-ui-react'

const CollectionVideos = (props) => {

  const videoList = props.videos.map((video, index) => {
    return <Video video={video} key={index} collection={props.collection} />
  })
  return (

    <div>
      {videoList}
    </div>
  )
}


export default CollectionVideos

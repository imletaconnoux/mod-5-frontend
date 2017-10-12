import React from 'react'
import Video from './Video'
import { Container } from 'semantic-ui-react'

const CollectionVideos = (props) => {
  console.log(props)

  const videoList = props.videos.map((video, index) => {
    return <Video video={video} key={index} />
  })
  return (

    <div>
      {videoList}
    </div>
  )
}


export default CollectionVideos

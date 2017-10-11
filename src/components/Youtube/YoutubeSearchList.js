import React from 'react'
import YoutubeItem from './YoutubeItem'

const YoutubeSearchList = (props) => {

  const youtubeItems = props.videos.map((video, index) => {
    return <YoutubeItem key={index} video={video}/>
  })

  console.log(props.videos[0])
  return (
    <div>
      {youtubeItems}
    </div>
  )
}

export default YoutubeSearchList

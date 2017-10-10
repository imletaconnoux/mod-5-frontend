import React from 'react'
import { searchYoutube } from '../services/video'
import YoutubeForm from './YoutubeForm'

class YoutubeContainer extends React.Component {




  fetchVideos = (searchTerm) => {
      searchYoutube(searchTerm)
      .then((json) => {
        console.log(json)
      })

  }
  render(){
    return (
      <div>
        <YoutubeForm searchVideos={this.fetchVideos}/>

        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/34vaXt9FH3A"
          frameBorder="0"
          allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}

export default YoutubeContainer

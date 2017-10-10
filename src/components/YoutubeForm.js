import React from 'react'

class YoutubeForm extends React.Component{

  constructor(){
    super()
    this.state = {
      searchInput: ""
    }
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      searchInput: event.target.value
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
    if (this.state.searchInput !== "") {
      this.props.searchVideos(this.state.searchInput)
    }
    this.setState({
      searchInput: ""
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSearch}>
        <input type="text" value={this.state.searchInput} onChange={this.handleInputChange} placeholder="Search for YouTube videos"/>
        <input type="submit" value="Search"/>

      </form>
    )
  }

}

export default YoutubeForm

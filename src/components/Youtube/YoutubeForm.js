import React from 'react'
import { searchVideos } from '../../actions/youtube'
import { connect } from 'react-redux'
import { Header, Icon, Popup } from 'semantic-ui-react'

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
      <div>
        <Header as='h2' icon>
          <Icon name='video play outline' color='red' />
          The YouTubist
          <Header.Subheader>
            Search for videos below. Save the ones your like to your collections.
          </Header.Subheader>
        </Header>

        <form onSubmit={this.handleSearch}>
          <input type="text" value={this.state.searchInput} onChange={this.handleInputChange} placeholder="Enter keyword"/>
          <input type="submit" value="Search"/>

        </form><br/>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    searchVideos: (term) => {
      dispatch(searchVideos(term))
    }
  }
}

export default connect(null, mapDispatchToProps)(YoutubeForm)

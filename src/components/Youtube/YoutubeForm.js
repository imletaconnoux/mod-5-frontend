import React from 'react'
import { searchVideos } from '../../actions/youtube'
import { connect } from 'react-redux'
import { Header, Icon, Popup, Checkbox } from 'semantic-ui-react'

class YoutubeForm extends React.Component{

  constructor(){
    super()
    this.state = {
      searchInput: "",
      sortInput: "relevance"
    }
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      searchInput: event.target.value
    })
  }

  handleSortInput = (event, {value}) => {
    event.preventDefault()
    this.setState({
      sortInput: value
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
    if (this.state.searchInput !== "") {
      this.props.searchVideos(this.state.searchInput, this.state.sortInput)
    }
    this.setState({
      searchInput: "",
      sortInput: "relevance"
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
          <div class="inline fields">
            <div class="field">
              <input type="text" value={this.state.searchInput} onChange={this.handleInputChange} placeholder="Enter keyword"/>
            </div>
            <label>Sort by: </label>
            <Checkbox
              radio
              label="Relevance    "
              checked={this.state.sortInput === "relevance"}
              value="relevance"
              onClick={this.handleSortInput}
            />
            <Checkbox
              radio
              label="Newest "
              checked={this.state.sortInput === "date"}
              value="date"
              onClick={this.handleSortInput}
            />
            <Checkbox
              radio
              label="Popularity  "
              checked={this.state.sortInput === "rating"}
              value="rating"
              onClick={this.handleSortInput}
            />
            <div class="field">
              <input type="submit" value="Search"/>
            </div>
          </div>
        </form><br/>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    searchVideos: (term, sort) => {
      dispatch(searchVideos(term, sort))
    }
  }
}

export default connect(null, mapDispatchToProps)(YoutubeForm)

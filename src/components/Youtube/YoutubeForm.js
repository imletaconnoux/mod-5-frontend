import React from 'react'
import { searchVideos, searchCollections } from '../../actions/youtube'
import { connect } from 'react-redux'
import { Grid, Header, Icon, Checkbox, Segment } from 'semantic-ui-react'

class YoutubeForm extends React.Component{

  constructor(){
    super()
    this.state = {
      searchInput: "",
      sortInput: "relevance",
      topicInput: ""
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
    if (this.state.searchInput !== "" && localStorage.getItem('jwtToken')) {
      this.props.searchVideos(this.state.searchInput, this.state.sortInput)
      this.props.searchCollections(this.state.searchInput)
    } else if (this.state.searchInput !== ""){
      this.props.searchVideos(this.state.searchInput, this.state.sortInput)
    }
    this.setState({
      searchInput: "",
      sortInput: "relevance"
    })
  }

  render(){

    return(

      <Grid stackable columns={1} textAlign='center' style={{height: '80%'}} verticalAlign='middle'>
        <Grid.Column>
        <Header as='h1' icon>
          <Icon name='video play outline' color='red' />
          Welcome to The YouTubist!
          <Header.Subheader>
            Search for videos and collections below.
          </Header.Subheader>
          <Header.Subheader>
            Save the videos and follow the collections you like.
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
              label="Relevance"
              checked={this.state.sortInput === "relevance"}
              value="relevance"
              onClick={this.handleSortInput}
            />
            <Checkbox
              radio
              label="Newest"
              checked={this.state.sortInput === "date"}
              value="date"
              onClick={this.handleSortInput}
            />
            <Checkbox
              radio
              label="Popularity"
              checked={this.state.sortInput === "rating"}
              value="rating"
              onClick={this.handleSortInput}
            />
            <div class="field">
              <input type="submit" value="Search"/>
            </div>
          </div>
        </form>
        </Grid.Column>
      </Grid>

    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    searchVideos: (term, sort) => {
      dispatch(searchVideos(term, sort))
    },
    searchCollections: (term) => {
      dispatch(searchCollections(term))
    }
  }
}

export default connect(null, mapDispatchToProps)(YoutubeForm)

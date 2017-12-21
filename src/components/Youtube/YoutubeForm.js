import React from 'react'
import { searchVideos, searchCollections } from '../../actions/youtube'
import { connect } from 'react-redux'
import { Form, Grid, Header, Icon, Checkbox, Button, Dropdown } from 'semantic-ui-react'
import '../../App.css'

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
    
    console.log(value)
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
    // this.setState({
    //   searchInput: "",
    //   sortInput: "relevance"
    // })
  }

  render(){

    const sortOptions = [{key: "relevance", value: "relevance", text: "Relevance"}, {key: "date", value: "date", text: "Newest"}, {key: "rating", value: "rating", text: "Popularity"} ]
    return(

      <Grid stackable columns={1} textAlign='center' style={{height: '80%'}} verticalAlign='middle'>
        <Grid.Column width={4}>
        <Header as='h1' icon>
          <Icon name='video play outline' color='red' />
          The YouTubist
          <Header.Subheader>
            Search for videos and collections.
          </Header.Subheader>
          <Header.Subheader>
            Save the videos and follow the collections you like.
          </Header.Subheader>
        </Header>
        <Form onSubmit={this.handleSearch}>
            <Form.Field>
              <input type="text" value={this.state.searchInput} onChange={this.handleInputChange} placeholder="Enter keyword"/>
            </Form.Field>

            <Form.Field>
              <Dropdown selection placeholder="Sort by:" options={sortOptions} onChange={this.handleSortInput}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
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

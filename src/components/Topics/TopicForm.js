import React from 'react'
import { Form, Dropdown, Grid, Header, Icon, Checkbox, Segment, Button } from 'semantic-ui-react'
import { searchTopicVideos } from '../../actions/topics'
import { searchTopicVideosWithTerm } from '../../actions/topics'
import { connect } from 'react-redux'

class TopicForm extends React.Component{

  constructor(){
    super()
    this.state = {
      topicInput: "",
      searchInput: "",
      sortInput: "relevance"
    }

  }
  componentDidMount(){
    this.setState({
        topicInput: this.props.topic.topicId
    })
  }

  handleDropDownChange = (event, {value}) => {
    this.setState({
        topicInput: value
    })
  }

  handleSearchInput = (event) => {
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

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.searchInput === "") {
      this.props.searchTopicVideos(this.state.topicInput, this.state.sortInput)
    } else if (this.state.searchInput !== ""){
      this.props.searchTopicVideosWithTerm(this.state.topicInput, this.state.sortInput, this.state.searchInput)
    }


  }
  render(){
    const subOptions = this.props.subTopics.map((subtopic) => {
      return {
        text: subtopic.name,
        value: subtopic.topicId,
        }
    })


    return(
      <Grid stackable columns={1} textAlign='center' style={{height: '80%'}} verticalAlign='middle'>
        <Grid.Column width={4} >
          <Form onSubmit={this.handleSubmit}>
            <Form.Field >
              <Dropdown onChange={this.handleDropDownChange} placeholder='Select a sub-topic' fluid selection options={subOptions} />
            </Form.Field>
            <Form.Field>
              <input placeholder='Include search term' onChange={this.handleSearchInput}/>
            </Form.Field>
            <Form.Field>
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
    searchTopicVideos: (topicId, sort) => {
      dispatch(searchTopicVideos(topicId, sort))
    },
    searchTopicVideosWithTerm: (topicId, sort, term) => {
      dispatch(searchTopicVideosWithTerm(topicId, sort, term))
    }
  }
}

export default connect(null, mapDispatchToProps)(TopicForm)

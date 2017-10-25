import React from 'react'
import { connect } from 'react-redux'
import { fetchTopics } from '../../actions/topics'
import TopicVideos from './TopicVideos'
import TopicForm from './TopicForm'
import { Header, Icon, Divider} from 'semantic-ui-react'


class TopicDetail extends React.Component{



  componentDidMount(){
    this.props.fetchTopics()
  }


  render(){
    console.log(this.props)
    if (this.props.topics.length > 0 ){
      const topic = this.props.topics.filter((topic) => {

        return topic.id === parseInt(this.props.match.params.id)
      })
      console.log(topic)
      return (
        <div>
        <Header as='h1' icon>
          <Icon name='video play outline' color='red' />
            Browse videos related to: {topic[0].name}
          <Header.Subheader>
          </Header.Subheader>
        </Header>
          <TopicForm subTopics={topic[0].sub_topics} topic={topic[0]}/>
          <TopicVideos topic={topic[0]}/>
        </div>
        )
    }  else {
      return (
        null
      )
    }
  }

}

function mapStateToProps(state){
  return {
    topics: state.topics.list
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchTopics: () => {
      dispatch(fetchTopics())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail)

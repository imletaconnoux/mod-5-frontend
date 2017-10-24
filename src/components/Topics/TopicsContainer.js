import React from 'react'
import { connect } from 'react-redux'
import { fetchTopics } from '../../actions/topics'
import TopicsList from './TopicsList'
import { Route } from 'react-router-dom'
import TopicDetail from './TopicDetail'

class TopicsContainer extends React.Component{

  componentDidMount(){
    this.props.fetchTopics()
  }

  render(){
    console.log(this.props)
    if (this.props.topics){
      return(
        <div>
          <Route exact path="/topics" render={(props) => <TopicsList topics={this.props.topics} {...props} />}/>
          <Route path="/topics/:id" render={(routeProps) => {

            const id = routeProps.match.params.id

            const topic = this.props.topics.filter((topic) => {

              return topic.id === parseInt(id)



            })
            return <TopicDetail topic={topic[0]} {...routeProps}/>
          }} />
        </div>
      )
    } else {
      return(
        null
      )
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchTopics: () => {
      dispatch(fetchTopics())
    }
  }
}

function mapStateToProps(state){
  return {
    topics: state.topics.list
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopicsContainer)

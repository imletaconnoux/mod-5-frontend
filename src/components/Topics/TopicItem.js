import React from 'react'
import { Grid, Icon, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { clearTopicVideos } from '../../actions/topics'


class TopicItem extends React.Component{

  handleClick = (event) => {
    this.props.clearTopicVideos()
  }

  render(){

    return(
      <Grid.Column width={5} centered>
        <Segment textAlign='center'>
          <Link to={"/topics/" + this.props.topic.id}>
            <Image
              src={this.props.topic.image}
              size='medium'
              bordered
              centered
              label={{ as: 'a', color: 'red', content: `${this.props.topic.name}`, ribbon: true }}
            />


          </Link>
          <Segment.Group horizontal>

              <Segment textAlign='center' onClick={this.handleClick}>
                <Link to={"/topics/" + this.props.topic.id}>
                  <p>View <Icon name="object group"/> </p>
                </Link>
              </Segment>
          </Segment.Group>
        </Segment>


      </Grid.Column>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    clearTopicVideos: () => {
      dispatch(clearTopicVideos())
    }
  }
}

export default connect(null, mapDispatchToProps)(TopicItem)

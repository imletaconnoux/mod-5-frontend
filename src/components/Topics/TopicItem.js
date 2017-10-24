import React from 'react'
import { Grid, Card, Button, Icon, Image, Segment, Form, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class TopicItem extends React.Component{


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

              <Segment textAlign='center'>
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


export default(TopicItem)

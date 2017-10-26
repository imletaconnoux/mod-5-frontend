import React from 'react'
import { connect } from 'react-redux'
import { createCollection } from '../../actions/collections'
import { Header, Icon, Form, Grid, Button, Container, Divider} from 'semantic-ui-react'

class CollectionForm extends React.Component{

  constructor(){
    super()
    this.state = {
      collectionInput: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()


    if (this.state.collectionInput !== "") {
      this.props.createCollection(this.state.collectionInput)
    }

    this.setState({
      collectionInput: ""
    })

  }

  handleInputChange = (event) => {
    this.setState({
      collectionInput: event.target.value
    })

  }

  render(){
    return(
      <Container>
      <Header as='h1'>
      <Icon name='video play outline' color='red' />
      My Collections
      </Header>
      <Divider section />

      <Grid textAlign='center' verticalAlign='right'>
        <Grid.Column width={4}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Field>
                <input type="text" value={this.state.collectionInput} onChange={this.handleInputChange} placeholder="Create new collection..."/>
              </Form.Field>
              <Button type='submit'>Create</Button>
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid>
      </Container>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    createCollection: (name) => {
      dispatch(createCollection(name))
    }
  }
}

export default connect(null, mapDispatchToProps)(CollectionForm)

import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { updateCollectionName } from '../../actions/collections'

class EditPopUpForm extends React.Component{

  constructor(){
    super()
    this.state = {
      nameInput: ""
    }
  }

  handleInput = (event) => {

    this.setState({
      nameInput: event.target.value
    })
  }

  handleClick = (event) => {

    event.preventDefault()
    if (this.state.nameInput !== "") {
      this.props.updateCollectionName(this.props.collection.id, this.state.nameInput)
    }
    this.setState({
      nameInput: ""
    })
  }
  render(){
    return(
      <Form>
      <Form.Field>
        <label>Update name:</label>

          <input onChange={this.handleInput} placeholder={this.props.collection.name} width={4}/>
          <Button size='mini' onClick={this.handleClick}>Update</Button>


      </Form.Field>




      </Form>
    )
  }

}

function mapDispatchToProps(dispatch){
  return{
    updateCollectionName: (id, name) => {
      dispatch(updateCollectionName(id, name))
    }
  }
}

export default connect(null, mapDispatchToProps)(EditPopUpForm)

import React from 'react'
import { connect } from 'react-redux'
import { createCollectionWithVideo } from '../../actions/collections'
import { Form, Button } from 'semantic-ui-react'

class PopUpFrom extends React.Component{

  constructor(){
    super()
    this.state = {
      collectionInput: ""
    }
  }

  handleClick = (event) => {
    if (this.state.collectionInput){
      this.props.createCollectionWithVideo(this.state.collectionInput, this.props.video)

    }
    this.setState({
      collectionInput: ""
    })
  }

  handleInput = (event) => {
    this.setState({
      collectionInput: event.target.value
    })
  }

  render(){
    return(
    <Form.Field>
      <label>Or create a new one:</label>

        <input onChange={this.handleInput} placeholder="name" width={4}/>
        <Button size='mini' onClick={this.handleClick}>Create</Button>


    </Form.Field>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    createCollectionWithVideo: (name, video) => {
      dispatch(createCollectionWithVideo(name, video))
    }
  }
}

export default connect(null, mapDispatchToProps)(PopUpFrom)

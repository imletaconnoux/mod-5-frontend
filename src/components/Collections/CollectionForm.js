import React from 'react'
import { connect } from 'react-redux'
import { createCollection } from '../../actions/collections'
import { Header, Icon } from 'semantic-ui-react'

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
      <div>
      <Header as='h2' icon>
        <Icon name='video play outline' color='red' />
        My Collections
        <Header.Subheader>
          XYZ
        </Header.Subheader>
      </Header>

        <form onSubmit={this.handleSubmit}>
          <label>Create a new collection</label>
          <input type="text" value={this.state.collectionInput} onChange={this.handleInputChange} placeholder="Collection name"/>
          <input type="submit" value="Create"/>

        </form><br/>
      </div>
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

import React from 'react'
import { Form, Radio } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addVideo } from '../../actions/collections'


class PopUpItem extends React.Component {

//state should probably be higher up
  constructor(){
    super()
    this.state= {
      collection: null
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      collection: this.props.collection
    })
    this.props.addVideo(this.props.video, this.props.collection)

  }

  render(){
    console.log(this.props)
    return(
      <Form.Field>
          <Radio

            label={this.props.collection.name}
            name='checkboxRadioGroup'
            value={this.props.collection}
            onChange={this.handleChange}
          />
      </Form.Field>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    addVideo: (video, collection) => {
    dispatch(addVideo(video, collection))
    }
  }
}

export default connect(null, mapDispatchToProps)(PopUpItem)

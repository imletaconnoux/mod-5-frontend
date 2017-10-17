import React from 'react'
import { Grid, Card, Button, Icon, Image, Segment, Form, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { deleteCollection } from '../../actions/collections'
import { connect } from 'react-redux'
import EditPopUpForm from './EditPopUpForm'

class CollectionItem extends React.Component{

  handleDelete = () => {
    console.log("delete")
    this.props.deleteCollection(this.props.collection)
  }

  render(){





    return(
      <Grid.Column width={5}>
        <Segment >
          <Link to={"/collections/" + this.props.collection.id}>
            <Image
              src={this.props.collection.image}
              size='medium'
              bordered
              label={{ as: 'a', color: 'red', content: `${this.props.collection.name}`, ribbon: true }}
            />


          </Link>
          <Segment.Group horizontal>
              <Segment>
                <Link to={"/collections/" + this.props.collection.id}>
                  <p>View <Icon name="object group"/> </p>
                </Link>
              </Segment>
              <Segment>
                <p>Edit
                  <Popup
                  trigger={<Icon name="edit" />}
                  size='huge'
                  hoverable
                  >
                  <EditPopUpForm  collection={this.props.collection}/>
                </Popup>
                 </p>
              </Segment>
              <Segment onClick={this.handleDelete}>
                <p>Remove <Icon name="delete"/> </p>
              </Segment>
          </Segment.Group>
        </Segment>


      </Grid.Column>
    )
  }

}

function mapDispatchToProps(dispatch){
  return {
    deleteCollection: (collection) => {
      dispatch(deleteCollection(collection))
    }
  }
}

export default connect(null, mapDispatchToProps)(CollectionItem)

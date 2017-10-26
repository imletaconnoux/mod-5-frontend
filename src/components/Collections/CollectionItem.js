import React from 'react'
import { Grid, Card, Button, Icon, Image, Segment, Form, Popup, Divider} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { deleteCollection } from '../../actions/collections'
import { connect } from 'react-redux'
import EditPopUpForm from './EditPopUpForm'

class CollectionItem extends React.Component{

  handleDelete = () => {

    this.props.deleteCollection(this.props.collection)
  }

  render(){

    console.log(this.props.user)



    return(

      <Grid.Column width={5} centered padded>
        <Segment textAlign='center'>
          <Link to={"/collections/" + this.props.collection.id}>
            <Image
              src={this.props.collection.image}
              size='medium'
              bordered
              centered
              label={{ as: 'a', color: 'red', content: `${this.props.collection.name}`, ribbon: true }}
            />


          </Link>
          <Segment.Group horizontal>

              <Segment textAlign='center'>
                <Link to={"/collections/" + this.props.collection.id}>
                  <p>View <Icon name="object group"/> </p>
                </Link>
              </Segment>
              <Segment textAlign='center'>
                <p>Edit
                  <Popup
                  trigger={<Icon name="edit" />}
                  size='huge'
                  hoverable
                  >
                  <EditPopUpForm  collection={this.props.collection}/>
                </Popup>
                 </p>
              </Segment >

              <Segment onClick={this.handleDelete} textAlign='center'>
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

function mapStateToProps(state){
  return {
    user: state.user.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem)

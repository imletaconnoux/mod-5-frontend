import React from 'react'
import { Segment, Icon, Header, Popup, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PopUp from '../Youtube/PopUp'
import { fetchCollections } from '../../actions/collections'

class FollowCollectionActions extends React.Component {

  componentDidMount(){
  
    this.props.fetchCollections()

  }

  handleDelete = (event) => {
    event.preventDefault()

  }

  render(){
    console.log("FOLLOW COLLECTION ACTION", this.props)

    const link = `https://www.youtube.com/embed/${this.props.video.youtube_id}`


    return(
      <Segment>
        <Segment as='h3' >
        {this.props.video.title}
        </Segment>
        <Segment>
            <iframe aligned="center" width="560" height="315" src={link}
            frameBorder="0"
            allowFullScreen></iframe>
      </Segment>
      <Segment.Group horizontal compact>
          <Segment>
            <Popup
              trigger={<Icon name="plus square outline" size="big" color="red"/>}
              size='huge'
              hoverable
            >
              <Form>
                <Form.Field>
                  <label>Save to an existing collection:</label>
                </Form.Field>
                <PopUp collections={this.props.collections} video={this.props.video} />

              </Form>
            </Popup>
          </Segment>
      </Segment.Group>
    </Segment>
    )
  }

}

function mapStateToProps(state){
  return{
    collections: state.collections.list
  }
}


function mapDispatchToProps(dispatch){
  return {
    fetchCollections: () => {
      dispatch(fetchCollections())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowCollectionActions)

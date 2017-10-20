import React from 'react'
import { Grid, Segment, Icon, Header, Popup, Form } from 'semantic-ui-react'
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
      <Grid.Column width={8} centered>
        <Segment>
          <Segment as='h3'>
          {this.props.video.title}
          </Segment>
          <iframe aligned="center" width="560" height="315" src={link}
            frameBorder="0"
            allowFullScreen></iframe>

            <Segment.Group raised horizontal>
              <Segment>
              Add to personal collection
              <Popup
                trigger={<Icon name="plus square outline" size="medium" color="red"/>}
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
              <Segment >
                <label>Watch related videos <Icon name="video play outline" size="medium" color='red'/></label>
              </Segment>
            </Segment.Group>
          </Segment>
        </Grid.Column>
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

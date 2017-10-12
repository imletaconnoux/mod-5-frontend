import React from 'react'
import { Grid, List, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionsList from './CollectionsList'
import { fetchCollections } from '../../actions/collections'

class CollectionsContainer extends React.Component{


  componentDidMount() {
    this.props.fetchCollections()
  }

  render(){
    console.log(this.props.collections)

    return(
      <div>


      <Grid>
        <Grid.Column width={3}>
        <CollectionsList collections={this.props.collections}/>


          </Grid.Column>

        </Grid>
      </div>

    )
  }

}




function mapStateToProps(state){
  return {
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
export default connect(mapStateToProps, mapDispatchToProps)(CollectionsContainer)

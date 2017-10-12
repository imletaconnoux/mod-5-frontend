import React from 'react'
import { Grid, List, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionsList from './CollectionsList'
import { fetchCollections } from '../../actions/collections'
import CollectionDetail from './CollectionDetail'

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
        <Route exact path="/collections" render={(props) => <CollectionsList collections={this.props.collections} {...props} />}/>

          </Grid.Column>

        </Grid>
        <Route path="/collections/:id" render={(routeProps) => {
          
          const id = routeProps.match.params.id

          const collection = this.props.collections.filter((collection) => {

            return collection.id === parseInt(id)



          })
          return <CollectionDetail collection={collection[0]} {...routeProps}/>
        }} />
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

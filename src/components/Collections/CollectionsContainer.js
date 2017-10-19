import React from 'react'
import { Grid, List, Loader, Segment} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionsList from './CollectionsList'
import { fetchCollections } from '../../actions/collections'
import CollectionDetail from './CollectionDetail'
import CollectionForm from './CollectionForm'

class CollectionsContainer extends React.Component{


  componentDidMount() {
    this.props.fetchCollections()

  }

  render(){
    console.log("COLLECTIONS CONTAINER COLLECTIONS", this.props.collections)

    return(
      <div>



        <Route exact path="/collections" component={CollectionForm} />
        <Route exact path="/collections" render={(props) => <CollectionsList collections={this.props.collections} {...props} />}/>


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

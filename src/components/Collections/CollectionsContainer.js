import React from 'react'
import { Grid, List, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import CollectionsList from './CollectionsList'

class CollectionsContainer extends React.Component{

  render(){
    console.log(this.props)
    return(
      <div>
        <CollectionsList collections={this.props.collections} />

      </div>

    )
  }

}

function mapStateToProps(state){
  return {
    collections: state.collections.list
  }
}
export default connect(mapStateToProps)(CollectionsContainer)

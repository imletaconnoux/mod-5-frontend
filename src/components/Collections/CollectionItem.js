import React from 'react'
import { Grid, Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CollectionItem extends React.Component{

  render(){

    const { collection } = this.props
    console.log(collection.image)
    return(
      <Grid.Column width={5}>
        <Link to={"/collections/" + collection.id}>
          <Image
            src={collection.image}
            size='medium'
            bordered
            label={{ as: 'a', color: 'orange', content: `${collection.name}`, ribbon: true }}
          />

        </Link>

      </Grid.Column>
    )
  }

}

export default CollectionItem

import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CollectionItem extends React.Component{

  render(){

    const { collection } = this.props
    console.log(collection.image)
    return(
      <div>
        <Card>
          <Image src={collection.image} />
          <Card.Content>
            <Card.Header>
          <Link to={"/collections/" + collection.id}>{collection.name}</Link>
        </Card.Header>
        </Card.Content>
        </Card>
      </div>
    )
  }

}

export default CollectionItem

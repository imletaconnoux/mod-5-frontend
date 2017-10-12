import React from 'react'
import PopUpItem from './PopUpItem'
import { Form,  } from 'semantic-ui-react'


const PopUp = (props) => {

    const PopUpList = props.collections.map((collection, index) => {
      return <PopUpItem key={index} collection={collection} video={props.video}/>
    })


    return(
      <div>
        {PopUpList}

      </div>

    )
  }



export default PopUp

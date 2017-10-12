import React from 'react'
import PopUpItem from './PopUpItem'
import { Form,  } from 'semantic-ui-react'
import PopUpForm from './PopUpForm'


const PopUp = (props) => {

    const PopUpList = props.collections.map((collection, index) => {
      return <PopUpItem key={index} collection={collection} video={props.video}/>
    })


    return(
      <div>
        {PopUpList}
        <PopUpForm video={props.video}/>

      </div>

    )
  }



export default PopUp

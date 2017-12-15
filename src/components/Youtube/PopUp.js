import React from 'react'
import PopUpItem from './PopUpItem'
import PopUpForm from './PopUpForm'


const PopUp = (props) => {



    if (localStorage.getItem('jwtToken')) {

      const PopUpList = props.collections.map((collection, index) => {
        return <PopUpItem key={index} collection={collection} video={props.video}/>
      })

      console.log("HELLO FROM POPUP COMP", PopUpList)
      return(
        <div>
          {PopUpList}
          <PopUpForm video={props.video}/>
        </div>
      )
    } else {
      return(
      <p>You must be logged in to save videos</p>
      )
    }



}



export default PopUp

import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm'

class UsersContainer extends React.Component{

  render(){
    return(
      <div>
        <Route exact path="/login" component={LoginForm}/>
      </div>
    )
  }

}

export default UsersContainer

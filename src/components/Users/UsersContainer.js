import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import Authorize from '../../Authorize'

class UsersContainer extends React.Component{

  render(){
    const AuthLoginForm = Authorize(LoginForm)
    return(
      <div>
        <Route exact path="/login" component={AuthLoginForm}/>
      </div>
    )
  }

}

export default UsersContainer

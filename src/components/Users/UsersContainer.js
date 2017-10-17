import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import Authorize from '../Authorize'
import { connect } from 'react-redux'

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

function mapStateToProps(state){
  return {
      currentUser: state.user.currentUser
    }
}
export default connect(mapStateToProps)(UsersContainer)

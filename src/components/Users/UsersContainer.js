import React from 'react'
import { Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import Authorize from '../Authorize'
import { connect } from 'react-redux'

class UsersContainer extends React.Component{

  render(){
    const AuthLoginForm = Authorize(LoginForm)
    const AuthSignupForm = Authorize(SignupForm)
    return(
      <div>
        <Route exact path="/login" component={AuthLoginForm}/>
        <Route exact path="/signup" component={AuthSignupForm}/>
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

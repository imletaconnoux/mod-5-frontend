import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/users'

class Nav extends React.Component{
  render(){

    if (localStorage.getItem('jwtToken')){
    return(
      <div className="ui secondary menu">
        <NavLink color='orange' activeClassName="inactive" className="item" to="/">My YouTubist</NavLink>
        <NavLink activeClassName="active" className="item" to="/collections">Collections</NavLink>
        <div className="right menu">
          <NavLink activeClassName="active" className="item" onClick={this.props.logoutUser} to="/">Logout</NavLink>
        </div>
      </div>
    )
  } else {
    return(
      <div className="ui secondary menu">
        <NavLink color='orange' activeClassName="inactive" className="item" to="/">My YouTubist</NavLink>
        <div className="right menu">
          <NavLink activeClassName="active" className="item" to="/login">Login</NavLink>
        </div>
      </div>
    )
  }
  }
}

function mapDispatchToProps(dispatch){
  return{
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(null, mapDispatchToProps)(Nav)

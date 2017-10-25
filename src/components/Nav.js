import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/users'

class Nav extends React.Component{
  render(){

    if (localStorage.getItem('jwtToken')){
    return(
      <div className="ui secondary menu">
        <NavLink color='orange' activeClassName="inactive" className="item" to="/">The YouTubist</NavLink>
        <NavLink activeClassName="active" className="item" to="/topics">Browse by Topic</NavLink>
        <NavLink activeClassName="active" className="item" to="/collections">My Collections</NavLink>
        <NavLink activeClassName="active" className="item" to="/following">Following</NavLink>
        <div className="right menu">
          <NavLink activeClassName="inactive" className="item" onClick={this.props.logoutUser} to="/">Logout</NavLink>
        </div>
      </div>
    )
  } else {
    return(
      <div className="ui secondary menu">
        <NavLink color='orange' activeClassName="inactive" className="item" to="/">The YouTubist</NavLink>
        <div className="right menu">
          <NavLink className="item" to="/login">Login</NavLink>
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

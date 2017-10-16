import React from 'react'
import { NavLink, Route } from 'react-router-dom'

class Nav extends React.Component{
  render(){
    return(
      <div className="ui secondary menu">
        <NavLink color='orange' activeClassName="inactive" className="item" to="/">My YouTubist</NavLink>
        <NavLink activeClassName="active" className="item" to="/collections">Collections</NavLink>
        <div className="right menu">
          <NavLink activeClassName="active" className="item" to="/login">Login</NavLink>
        </div>
      </div>
    )
  }
}

export default Nav

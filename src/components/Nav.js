import React from 'react'
import { Menu, Icon, Divider } from 'semantic-ui-react'
import { Link, NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/users'

class Nav extends React.Component{
  render(){

    if (localStorage.getItem('jwtToken')){
    return(
      <div className="ui secondary menu">

        <div className="right menu">
          <NavLink activeClassName="inactive" className="item" onClick={this.props.logoutUser} to="/">Logout</NavLink>
        </div>

        <Menu vertical fixed='left' className="ui menu">
          <Menu.Item>
            <Menu.Header><NavLink to="/"><Icon name='video play outline' color='red'/>Home</NavLink></Menu.Header>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header><NavLink to="/collections"><Icon name='folder outline' color='red'/>My Collections</NavLink></Menu.Header>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header><NavLink to="/following"><Icon name='feed' color='red'/>Following</NavLink></Menu.Header>
          </Menu.Item>
          <Divider/>
          <Menu.Item>
            <Menu.Header><NavLink to="/topics">TOPICS</NavLink></Menu.Header>
          </Menu.Item>
          <Menu.Menu>
              <Menu.Item><NavLink to="/topics/1"><Icon name='music' color='red'/>Music</NavLink></Menu.Item>
              <Menu.Item><NavLink to="/topics/2"><Icon name='gamepad' color='red'/>Gaming</NavLink></Menu.Item>
              <Menu.Item><NavLink to="/topics/3"><Icon name='soccer' color='red'/>Sports</NavLink></Menu.Item>
              <Menu.Item><NavLink to="/topics/4"><Icon name='video' color='red'/>Entertainment</NavLink></Menu.Item>
              <Menu.Item><NavLink to="/topics/5"><Icon name='shopping bag' color='red'/>Lifestyle</NavLink></Menu.Item>
              <Menu.Item><NavLink to="/topics/6"><Icon name='newspaper' color='red'/>Society</NavLink></Menu.Item>
          </Menu.Menu>
          <Divider/>
        </Menu>
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

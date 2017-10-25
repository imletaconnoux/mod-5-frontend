import React from 'react'
import { Redirect } from 'react-router-dom'

function Authorize(RenderedComponent, props){

  return class extends React.Component{

    render(){
      if (localStorage.getItem('jwtToken') && this.props.location.pathname === "/login") {
        return <Redirect to="/" />
      } else if (localStorage.getItem('jwtToken') && this.props.location.pathname === "/signup") {
        return <Redirect to="/" />
      } else if (!localStorage.getItem('jwtToken') && this.props.location.pathname === "/collections") {
          return <Redirect to="/login" />
      } else if (!localStorage.getItem('jwtToken') && this.props.location.pathname === "/topics"){
          return <Redirect to="/login" />
      } else {
        return (
          <RenderedComponent {...this.props} {...props}/>
          )
      }
    }

  }

}

export default Authorize

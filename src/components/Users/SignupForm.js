import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class SignUpForm extends React.Component{
  constructor() {
    super()
    this.state = {
      nameInput: "",
      emailInput: "",
      passwordInput: ""
    }
  }

}

export default SignUpForm

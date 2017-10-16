import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component{

  constructor(){
    super()
    this.state = {
      emailInput: "",
      passwordInput: ""
    }
  }

  handleEmailInput = (event) => {
    this.setState({
      emailInput: event.target.value
    })
  }

  handlePasswordInput = (event) => {
    this.setState({
      passwordInput: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render(){
    console.log("rendering loginform")
    return(
      <div className='login-form'>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='orange' textAlign='center'>
          <Image src='/logo.png' />
          {' '}Log-in to your account
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              onChange={this.handleEmailInput}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={this.handlePasswordInput}
            />

            <Button color='orange' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}

export default LoginForm

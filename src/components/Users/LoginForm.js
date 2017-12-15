import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { loginUser } from '../../actions/users'
import { connect } from 'react-redux'

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
    this.props.loginUser({email: this.state.emailInput, password: this.state.passwordInput })
    this.setState({
      emailInput: "",
      passwordInput: ""
    })
  }

  render(){
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
        <Header as='h2' color='red' textAlign='center'>
          <Icon name='video play outline' color='red' />
          Log-in to your account
        </Header>
        <Form size='large' onSubmit={this.handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              onChange={this.handleEmailInput}
              value={this.state.emailInput}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={this.handlePasswordInput}
              value={this.state.passwordInput}
            />

            <Button color='red' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to='/signup'>Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return{
    loginUser: (loginParams) => {
      dispatch(loginUser(loginParams))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)

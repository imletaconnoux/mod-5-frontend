import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signupUser } from '../../actions/users'


class SignUpForm extends React.Component{
  constructor() {
    super()
    this.state = {
      nameInput: "",
      emailInput: "",
      passwordInput: ""
    }
  }

  handleNameInput = (event) => {
    this.setState({
      nameInput: event.target.value
    })
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
    this.props.signupUser({name: this.state.nameInput, email: this.state.emailInput, password: this.state.passwordInput})
    this.setState({
      nameInput: "",
      emailInput: "",
      passwordInput: ""
    })
  }

  render(){
    return(<div className='signup-form'>
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
        Create an account
      </Header>
      <Form size='large' onSubmit={this.handleSubmit}>
        <Segment stacked>
          <Form.Input
            fluid
            icon='user'
            iconPosition='left'
            placeholder='Name'
            onChange={this.handleNameInput}
          />
          <Form.Input
            fluid
            icon='laptop'
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

          <Button color='red' fluid size='large'><Icon name='signup'/>Create account</Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
</div>

    )
  }

}

function mapDispatchToProps(dispatch){
  return{
    signupUser: (loginParams) => {
      dispatch(signupUser(loginParams))
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUpForm)

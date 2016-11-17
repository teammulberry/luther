import React, { Component } from 'react'
import Auth from './Auth'
import Homepage from './Homepage'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: {
        user: 'student',
        pass: '1234'
      }
    }
    this.handleClick = (user, pass) => {
      const {login} = this.state
      if (user === login.user && pass === login.pass) {
        let newLogin = {}
        newLogin = this.state.login
        newLogin.auth = true
        this.setState({login: newLogin})
      }
    }
  }
  render () {
    return (
      <div className='app absolute top-0 left-0 w-100 min-h-100 tc'>
        {!this.state.login.auth ? <Auth click={this.handleClick} /> : (this.props.children || <Homepage />)}
      </div>
    )
  }
}

export default App

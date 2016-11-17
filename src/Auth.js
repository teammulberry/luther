import React, { Component } from 'react'

class Auth extends Component {
  constructor (props) {
    super(props)
    this.handleClick = () => {
      const {click} = this.props
      click(
        document.getElementById('user').value, document.getElementById('pass').value
      )
    }
    this.handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        this.handleClick()
      }
    }
  }
  render () {
    return (
      <div className='container absolute mw7 w-100'>
        <fieldset className='ba b--transparent ph0 mh0'>
          <div className='mt3'>
            <label className='db fw6 lh-copy f6'>Username</label>
            <input id='user' className='pa3 br2 input-reset ba bg-white' onKeyPress={this.handleKeyPress} />
          </div>
          <div className='mt3'>
            <label className='db fw6 lh-copy f6'>Password</label>
            <input id='pass' className='pa3 br2 input-reset ba bg-white' type='password' onKeyPress={this.handleKeyPress} />
          </div>
        </fieldset>
        <input className='b ph4 pv3 input-reset ba amber white grow pointer f6 dib br2 b--white pointer' type='submit' value="Sign In" onClick={this.handleClick} />
      </div>
    )
  }
}

export default Auth

import React, { Component } from 'react'
import Homepage from './Homepage'
import './app.css'

class App extends Component {
  render() {
    return (
      <div className='app absolute top-0 left-0 w-100 h-100 tc overflow-hidden'>
        {this.props.children || <Homepage />}
      </div>
    )
  }
}

export default App

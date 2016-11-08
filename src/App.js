import React, { Component } from 'react'
import Homepage from './Homepage'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        {this.props.children || <Homepage />}
      </div>
    )
  }
}

export default App

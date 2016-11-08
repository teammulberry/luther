import React, { Component } from 'react'
import { Link } from 'react-router'
import './Homepage.css'

class Homepage extends Component {
  render() {
    return (
      <div className='container'>
        <Link
          to='/luther-learned/'
          className='btn'>
          Luther Learned
        </Link>
        <Link
          to='/blessings-luther-and-me/'
          className='btn bouquet'>
          Blessings: Luther & Me
        </Link>
        <Link
          to='/what-does-the-bible-say/'
          className='btn amber'>
          What does the Bible say?
        </Link>
        <Link
          to='/luther-and-lutherans/'
          className='btn highland'>
          Luther & Lutherans
        </Link>
      </div>
    )
  }
}

export default Homepage

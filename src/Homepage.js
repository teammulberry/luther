import React, { Component } from 'react'
import { Link } from 'react-router'

class Homepage extends Component {
  render() {
    return (
      <div className='container absolute mw7 w-100'>
        <div className='fl w-100 w-50-ns pa2 grow'>
          <Link
            to='/luther-learned/'
            className='bg-neptune db w-100 pv3 br2 f4 white no-underline'>
            Luther Learned
          </Link>
        </div>
        <div className='fl w-100 w-50-ns pa2 grow'>
          <Link
            to='/blessings-luther-and-me/'
            className='bg-bouquet db w-100 pv3 br2 f4 white no-underline'>
            Blessings: Luther & Me
          </Link>
        </div>
        <div className='fl w-100 w-50-ns pa2 grow'>
          <Link
            to='/what-does-the-bible-say/'
            className='bg-amber db w-100 pv3 br2 f4 white no-underline'>
            What does the Bible say?
          </Link>
        </div>
        <div className='fl w-100 w-50-ns pa2 grow'>
          <Link
            to='/luther-and-lutherans/'
            className='bg-highland db w-100 pv3 br2 f4 white no-underline'>
            Luther & Lutherans
          </Link>
        </div>
      </div>
    )
  }
}

export default Homepage

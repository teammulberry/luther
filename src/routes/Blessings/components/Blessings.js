import React, { Component } from 'react'

class Blessings extends Component {
  render() {
    // const events = [
    //   { id: 0, title: 'essay due' }
    // ]
    return (
      <div>
        <h2>Blessings</h2>
        <p>In the eight boxes on top, write some of the many blessings God has given to you. When you are done, touch each of the boxes on the bottom to reveal a blessing God gave to Martin Luther. How do the blessings compare?</p>
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <hr />
        <div>
          <div>Baptism</div>
          <div>Saving Faith</div>
          <div>God's Word</div>
          <div>Church</div>
          <div>Home & Family</div>
          <div>Savior</div>
          <div>Music</div>
          <div>Food</div>
        </div>
      </div>
    )
  }
}

module.exports = Blessings

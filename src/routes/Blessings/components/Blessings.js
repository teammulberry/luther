import React, { Component } from 'react'
import { Link } from 'react-router'

class Blessings extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lutherBlessings: {
        baptism: {
          name: 'Baptism'
        },
        savingFaith: {
          name: 'Saving Faith'
        },
        godsWord: {
          name: 'God\'s Word'
        },
        church: {
          name: 'Church'
        },
        homeFamily: {
          name: 'Home & Family'
        },
        savior: {
          name: 'Savior'
        },
        music: {
          name: 'Music'
        },
        food: {
          name: 'Food'
        }
      }
    }
    this.handleClick = (id) => {
      let newBlessings = {}
      newBlessings = this.state.lutherBlessings
      newBlessings[id].active = true
      this.setState({lutherBlessings: newBlessings})
    }
  }
  render() {
    const {lutherBlessings} = this.state
    const userBlessings = 8
    return (
      <div>
        <h2>Blessings: Luther & Me</h2>
        <p>In the eight boxes on top, write some of the many blessings God has given to you. When you are done, touch each of the boxes on the bottom to reveal a blessing God gave to Martin Luther. How do the blessings compare?</p>
        <div className='pa2 f6'>
          <div className='fl pb2'>
            {[...Array(userBlessings)].map((e, i) =>
              <div className='fl w-100 w-25-ns pa2' key={i}>
                <input type='text' className='b--bouquet b--solid br2 w-100 pa2 tc' />
              </div>
            )}
          </div>
          <hr className='b--bouquet b--solid br2 mb3' />
          <div>
            {Object.keys(lutherBlessings).map((id, i) =>
              <div className='fl w-100 w-25-ns pa2' key={i}>
                <div className={'b--bouquet b--solid br2 bw1 w-100 pa2 pointer grow' + (lutherBlessings[id].active ? ' bg-white' : ' bouquet')} onClick={() => this.handleClick(id)}>
                  <span style={{visibility: lutherBlessings[id].active ? 'visible' : 'hidden'}}>
                    <img
                      src={`/svg/${id}.svg`}
                      alt={lutherBlessings[id].name}
                      style={{height: 16, position: 'relative', top: 2, paddingRight: 10}} />
                    {lutherBlessings[id].name}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='absolute top-1-4 left-1'>
          <Link
            to='/'
            className='bouquet pv1 ph2 w-100 br2 white no-underline'>
            Home
          </Link>
        </div>
      </div>
    )
  }
}

module.exports = Blessings

import React, { Component } from 'react'
import { Link } from 'react-router'

class Bible extends Component {
  constructor(props) {
    super(props)

    this.state = {
      passages: {
        a: {
          text: 'A. Exodus 20:11a: In six days the Lord made the heaves and the earth, the sea, and all that is in them.'
        },
        b: {
          text: 'B. Deutoronomy 5:12a: and Luke 4-16b: Observe the Sabbath day by keeping it holy. On the Sabbath day [Jesus] went into the synogauge, as was his custom.'
        },
        c: {
          text: 'C. Ephesians 2:8,9: It is by grace you have been saved, through faith-and this is not from yourselves, it is the gift of God- not by works, so that no one can boast.'
        },
        d: {
          text: 'D. Ephesians 6:1: Children, obey your parents in the Lord, for this is right.'
        },
        e: {
          text: 'E. Philippians 4:8: Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable-if anything is excellent or praiseworthy-think about such things.'
        }
      }
    }
    this.handleClick = (id) => {
      let newPassages = {}
      newPassages = this.state.passages
      newPassages[id].active = true
      this.setState({passages: newPassages})
    }
  }
  render() {
    const {passages} = this.state
    return (
      <div>
        <h2>What does the Bible say?</h2>
        <p>As Martin Luther studied God's word and grew in faith, he learned to use Scripture to help with situations he faced.</p>
        <p><strong>You can do the same in your life!</strong></p>
        <div className='pa2 f6 tl'>
          <ul className={'list fl w-100 pl0 pr0 pr3-ns' + (Object.keys(passages).length ? ' w-50-ns' : '')}>
            <li className='b--amber b--solid bw1 db w-100 br2 pa2 mv2 bg-white'>A friend asks you to spend the weekend at his house. Your parents don't know that he's allowed to roam the street and do almost anything he pleases. {passages['d'].active ? <b><br />{passages['d'].text}</b> : ''}</li>
            <li className='b--amber b--solid bw1 db w-100 br2 pa2 mv2 bg-white'>While at a park during your summer rock climbing class, your instructor says that the rock formations are at least a billion years old. {passages['a'].active ? <b><br />{passages['a'].text}</b> : ''}</li>
            <li className='b--amber b--solid bw1 db w-100 br2 pa2 mv2 bg-white'>A classmate bugs you to look at magazines with photos of nude people in them. {passages['e'].active ? <b><br />{passages['e'].text}</b> : ''}</li>
            <li className='b--amber b--solid bw1 db w-100 br2 pa2 mv2 bg-white'>A neighbor tells her son that if he wants to be successful on earth and also gain heaven, he must share, be kind to others, and obey God. {passages['c'].active ? <b><br />{passages['c'].text}</b> : ''}</li>
            <li className='b--amber b--solid bw1 db w-100 br2 pa2 mv2 bg-white'>A church friend says, "When I turn 18, I'm not going to church every week. I'll just go once in a while. It's not like I don't have faith." {passages['b'].active ? <b><br />{passages['b'].text}</b> : ''}</li>
          </ul>
          <ul className='fl w-100 w-50-ns pl0 pr0 pl3-ns'>
            {Object.keys(passages).map((id, i) =>
              <li className={'b--amber b--solid bw1 w-100 br2 pa2 mv2 bg-white pointer grow' + (passages[id].active ? ' dn' : ' db')} onClick={() => this.handleClick(id)} key={i}>{passages[id].text}</li>
            )}
          </ul>
        </div>
        <div className='absolute top-1 left-1'>
          <Link
            to='/'
            className='amber pv1 ph2 w-100 br2 white no-underline'>
            Home
          </Link>
        </div>
      </div>
    )
  }
}

module.exports = Bible

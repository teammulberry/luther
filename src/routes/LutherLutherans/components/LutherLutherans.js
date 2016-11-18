import React, { Component } from 'react'
import { Link } from 'react-router'
import Dragula from 'react-dragula'

class LutherLutherans extends Component {
  constructor(props) {
    super(props)
    this.state = {
      words: {
        catechisms: {
          word: 'catechisms'
        },
        deserve: {
          word: 'deserve'
        },
        works: {
          word: 'works'
        },
        complete: {
          word: 'complete'
        },
        save: {
          word: 'save'
        },
        declare: {
          word: 'declare'
        },
        hymns: {
          word: 'hymns'
        },
        worship: {
          word: 'worship'
        },
        thanks: {
          word: 'thanks'
        },
        translated: {
          word: 'translated'
        },
        rose: {
          word: 'rose'
        },
        punishment: {
          word: 'punishment'
        },
        fearing: {
          word: 'fearing'
        },
        perfect: {
          word: 'perfect'
        }
      }
    }
  }
  componentDidMount () {
    const dropzonesObj = document.getElementsByClassName('dropzone')
    let dropzones = Array.prototype.slice.call(dropzonesObj)
    dropzones.push(document.getElementById('words'))
    Dragula({containers: dropzones})
    .on('drop', function (el, target, source) {
      if (el.innerHTML === target.id) {
        let drop = document.createElement('b')
        drop.innerHTML = target.id
        target.parentNode.insertBefore(drop, target.nextSibling)
        target.remove()
      } else {
        source.append(el)
      }
      if (source.getElementsByTagName('li').length <= 0) {
        let success = document.createElement('h2')
        success.setAttribute('class', 'highland white pv3 ph4 dib br2')
        success.innerHTML = 'Great job!'
        document.getElementById('success').append(success)
      }
    })
  }
  render() {
    const {words} = this.state
    return (
      <div>
        <h2>Luther & Lutherans</h2>
        <p>Drag words from the word bank on the bottom to complete the paragraph.</p>
        <div id='success' />
        <div className='pa2 f6 tl'>
          <p className='fl w-100 lh-double b--highland b--solid bw1 br2 pa3 ma1 bg-white'>The church of Martin Luther's day taught that good (1) <span id='works' className='dropzone'></span> were necessary to gain God's favor and salvation. Martin knew he was sinful and grew up (2) <span id='fearing' className='dropzone'></span> God. Only as he studied God's Word did he learn that Jesus did the (3) <span id='complete' className='dropzone'></span> job of saving people from their sins and from (4) <span id='punishment' className='dropzone'></span> in hell. Jesus was (5) <span id='perfect' className='dropzone'></span> in our place, died on the cross to suffer the punishment we (6) <span id='deserve' className='dropzone'></span>, and (7) <span id='rose' className='dropzone'></span> from the dead. Good works do not (8) <span id='save' className='dropzone'></span>. They are done to show (9) <span id='thanks' className='dropzone'></span> to God for saving us.<br />
          So the others would learn God's saving truths, Martin Luther (10) <span id='translated' className='dropzone'></span> the Bible into German. He wrote (11) <span id='catechisms' className='dropzone'></span> to help adults teach and children learn God's truths in simple straight forward ways. To help people be active participants in (12) <span id='worship' className='dropzone'></span>, Luther wrote (13) <span id='hymns' className='dropzone'></span> and found and adapted others that could be used to praise God and to (14) <span id='declare' className='dropzone'></span> his truths to others.</p>
          <ul id='words' className='list tc pa0'>
            {Object.keys(words).map((id, i) =>
              <li className={'b--highland b--solid bw1 br2 pa2 ma1 bg-white pointer' + (words[id].active ? ' dn' : ' dib')} key={i}>{words[id].word}</li>
            )}
          </ul>
        </div>
        <div className='absolute top-1-4 left-1'>
          <Link
            to='/'
            className='highland pv1 ph2 w-100 br2 white no-underline'>
            Home
          </Link>
        </div>
      </div>
    )
  }
}

module.exports = LutherLutherans

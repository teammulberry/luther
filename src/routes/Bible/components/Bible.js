import React, { Component } from 'react'
import CloseButton from '../../../components/CloseButton'
import Dragula from 'react-dragula'

class Bible extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passages: {
        a: {
          problem: 'While at a park during your summer rock climbing class, your instructor says that the rock formations are at least a billion years old.',
          text: 'A. Exodus 20:11a: In six days the Lord made the heavens and the earth, the sea, and all that is in them.'
        },
        b: {
          problem: 'A church friend says, "When I turn 18, I\'m not going to church every week. I\'ll just go once in a while. It\'s not like I don\'t have faith."',
          text: 'B. Deutoronomy 5:12a: and Luke 4-16b: Observe the Sabbath day by keeping it holy. On the Sabbath day [Jesus] went into the synogauge, as was his custom.'
        },
        c: {
          problem: 'A neighbor tells her son that if he wants to be successful on earth and also gain heaven, he must share, be kind to others, and obey God.',
          text: 'C. Ephesians 2:8,9: It is by grace you have been saved, through faith-and this is not from yourselves, it is the gift of God- not by works, so that no one can boast.'
        },
        d: {
          problem: 'A friend asks you to spend the weekend at his house. Your parents don\'t know that he\'s allowed to roam the street and do almost anything he pleases.',
          text: 'D. Ephesians 6:1: Children, obey your parents in the Lord, for this is right.'
        },
        e: {
          problem: 'A classmate bugs you to look at magazines with photos of nude people in them.',
          text: 'E. Philippians 4:8: Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable-if anything is excellent or praiseworthy-think about such things.'
        }
      }
    }
  }
  shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array;
  }
  componentDidMount () {
    const {passages} = this.state
    const dropzonesObj = document.getElementsByClassName('dropzone')
    let dropzones = Array.prototype.slice.call(dropzonesObj)
    dropzones.push(document.getElementById('words'))
    Dragula({containers: dropzones})
    .on('drop', function (el, target, source) {
      if (el.id === target.id.replace('t_', '')) {
        let newTarget = target.cloneNode()
        newTarget.innerHTML = passages[el.id].problem
        newTarget.removeAttribute('id')
        newTarget.classList.remove('dropzone')
        let drop = document.createElement('li')
        drop.classList.add('dropped')
        drop.innerHTML = passages[el.id].text
        newTarget.appendChild(drop)
        target.parentNode.insertBefore(newTarget, target.nextSibling)
        target.parentNode.removeChild(target)
      } else {
        source.appendChild(el)
      }
      if (source.getElementsByTagName('li').length <= 0) {
        let success = document.createElement('h2')
        success.setAttribute('class', 'amber white pv3 ph4 dib br2')
        success.innerHTML = 'Great job!'
        document.getElementById('success').appendChild(success)
      }
    })
  }
  render() {
    const {passages} = this.state
    const passagesShuffle = this.shuffle(Object.keys(passages))
    return (
      <div>
        <h2>What does the Bible say?</h2>
        <p>As Martin Luther studied God's word and grew in faith, he learned to use Scripture to help with situations he faced. <strong>You can do the same in your life!</strong> Drag the passage from the right to match the situation on the left.</p>
        <div id='success' />
        <div className='pa2 f6 tl'>
          <ul className='list fl w-100 pl0 pr0 pr3-ns w-50-ns'>
            {passagesShuffle.map((id, i) =>
              <li id={'t_' + id} className='dropzone b--amber b--solid bw1 db w-100 br2 pa2 mv2 bg-white' key={i}>{passages[id].problem}</li>
            )}
          </ul>
          <ul id='words' className='fl w-100 w-50-ns pl0 pr0 pl3-ns'>
            {Object.keys(passages).map((id, i) =>
              <li id={id} className={'b--amber b--solid bw1 w-100 br2 pa2 mv2 bg-white pointer grow' + (passages[id].active ? ' dn' : ' db')} key={i}>{passages[id].text}</li>
            )}
          </ul>
        </div>
        <CloseButton color='amber' />
      </div>
    )
  }
}

module.exports = Bible

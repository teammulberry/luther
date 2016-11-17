import React, { Component } from 'react'
import { Link } from 'react-router'
import Dragula from 'react-dragula'

class LutherLearned extends Component {
  constructor(props) {
    super(props)
    this.state = {
      words: {
        afraid: {
          text: '1. The church of Luther\'s time taught that God was only an angry judge who punished. This made people ',
          word: 'afraid'
        },
        place: {
          text: '2. Martin Luther read in the Bible that God loves people and sent his Son, Jesus, to be punished in our ',
          word: 'place'
        },
        heaven: {
          text: '3. The church taught that people needed to do good things to earn ',
          word: 'Heaven'
        },
        sinful: {
          text: '4. Luther knew that he was very ',
          word: 'sinful'
        },
        enough: {
          text: '5. By teaching that people could earn their own salvation, the church was saying that the saving work of Jesus was not ',
          word: 'enough'
        },
        jesus: {
          text: '6. From reading the Bible, Luther learned that sinners only saved through ',
          word: 'Jesus'
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
        success.setAttribute('class', 'neptune white pv3 ph4 dib br2')
        success.innerHTML = 'Great job!'
        document.getElementById('success').append(success)
      }
    })
  }
  render() {
    const {words} = this.state
    const wordsShuffle = this.shuffle(Object.keys(words))
    return (
      <div>
        <h2>Luther Learned</h2>
        <p>Finish each sentence. Drag a word from the right and drop it in the correct blank space.</p>
        <div id='success' />
        <div className='pa2 f6'>
          <div className='fl w-100 w-75-ns pr0 pr2-ns'>
            <ul className='list b--neptune ba bw1 br2 pa4 bg-white tl lh-copy'>
              {Object.keys(words).map((id, i) =>
                <li className='pb3' key={i}>{words[id].text} <span id={words[id].word} className='dropzone'></span> .</li>
              )}
            </ul>
          </div>
          <div className='fl w-100 w-25-ns pl0 pl2-ns'>
            <ul id='words' className='list b--neptune ba bw1 br2 pa4 bg-white lh-double'>
              {wordsShuffle.map((id, i) =>
                <li className={'grow pointer db' + (words[id].active ? ' dn' : '')} key={i}>{words[id].word}</li>
              )}
            </ul>
          </div>
        </div>
        <div className='absolute top-1-4 left-1'>
          <Link
            to='/'
            className='neptune pv1 ph2 w-100 br2 white no-underline'>
            Home
          </Link>
        </div>
      </div>
    )
  }
}

module.exports = LutherLearned

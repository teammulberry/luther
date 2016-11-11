import React, { Component } from 'react'
import { Link } from 'react-router'

class LutherLearned extends Component {
  constructor(props) {
    super(props)

    this.state = {
      words: {
        jesus: {
          word: 'Jesus'
        },
        place: {
          word: 'place'
        },
        enough: {
          word: 'enough'
        },
        heaven: {
          word: 'Heaven'
        },
        afraid: {
          word: 'afraid'
        },
        sinful: {
          word: 'sinful'
        }
      }
    }
    this.handleClick = (id) => {
      let newWords = {}
      newWords = this.state.words
      newWords[id].active = true
      this.setState({words: newWords})
    }
  }
  render() {
    const {words} = this.state
    return (
      <div>
        <h2>Luther Learned</h2>
        <p>Finish each sentence. Drag a word from the right and drop it in the correct blank space.</p>
        <div className='pa2 f6'>
          <div className='fl w-100 w-75-ns pr0 pr2-ns'>
            <ul className='list b--neptune ba bw1 br2 pa4 bg-white tl lh-copy'>
              <li className='pb3'>1. The church of Luther's time taught that God was only an angry judge who punished. This made people {words['afraid'].active ? (<b>afraid</b>) : '________'}.</li>
              <li className='pb3'>2. Martin Luther read in the Bible that God loves people and sent his Son, Jesus, to be punished in our {words['place'].active ? (<b>place</b>) : '________'}.</li>
              <li className='pb3'>3. The church taught that people needed to do good things to earn {words['heaven'].active ? (<b>Heaven</b>) : '________'}.</li>
              <li className='pb3'>4. Luther knew that he was very {words['sinful'].active ? (<b>sinful</b>) : '________'}.</li>
              <li className='pb3'>5. By teaching that people could earn their own salvation, the church was saying that the saving work of Jesus was not {words['enough'].active ? (<b>enough</b>) : '________'}.</li>
              <li className='pb3'>6. From reading the Bible, Luther learned that sinners only saved through {words['jesus'].active ? (<b>Jesus</b>) : '________'}.</li>
            </ul>
          </div>
          <div className='fl w-100 w-25-ns pl0 pl2-ns'>
            <ul className='list b--neptune ba bw1 br2 pa4 bg-white lh-copy'>
              {Object.keys(words).map((id, i) =>
                <li className={'pb3 grow pointer' + (words[id].active ? ' dn' : '')} onClick={() => this.handleClick(id)} key={i}>{words[id].word}</li>
              )}
            </ul>
          </div>
        </div>
        <div className='absolute top-1 left-1'>
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

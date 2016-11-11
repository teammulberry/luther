import React, { Component } from 'react'
import { Link } from 'react-router'

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
        <h2>Luther & Lutherans</h2>
        <div className='pa2 f6 tl'>
          <p className='fl w-100 lh-copy b--highland b--solid bw1 br2 pa3 ma1 bg-white'>The church of Martin Luther's day taught that good (1) {words['works'].active ? (<b>works</b>) : '________'} were necessary to gain God's favor and salvation. Martin knew he was sinful and grew up (2) {words['fearing'].active ? (<b>fearing</b>) : '________'} God. Only as he studied God's Word did he learn that Jesus did the (3) {words['complete'].active ? (<b>complete</b>) : '________'} job of saving people from their sins and from (4) {words['punishment'].active ? (<b>punishment</b>) : '________'} in hell. Jesus was (5) {words['perfect'].active ? (<b>perfect</b>) : '________'} in our place, died on the cross to suffer the punishment we (6) {words['deserve'].active ? (<b>deserve</b>) : '________'}, and (7) {words['rose'].active ? (<b>rose</b>) : '________'} from the dead. Good works do not (8) {words['save'].active ? (<b>save</b>) : '________'}. They are done to show (9) {words['thanks'].active ? (<b>thanks</b>) : '________'} to God for saving us.<br />
          So the others would learn God's saving truths, Martin Luther (10) {words['translated'].active ? (<b>translated</b>) : '________'} the Bible into German. He wrote (11) {words['catechisms'].active ? (<b>catechisms</b>) : '________'} to help adults teach and children learn God's truths in simple straight forward ways. To help people be active participants in (12) {words['worship'].active ? (<b>worship</b>) : '________'}, Luther wrote (13) {words['hymns'].active ? (<b>hymns</b>) : '________'} and found and adapted others that could be used to praise God and to (14) {words['declare'].active ? (<b>declare</b>) : '________'} his truths to others.</p>
          <ul className='list tc pa0'>
            {Object.keys(words).map((id, i) =>
              <li className={'b--highland b--solid bw1 br2 pa2 ma1 bg-white pointer grow' + (words[id].active ? ' dn' : ' dib')} onClick={() => this.handleClick(id)} key={i}>{words[id].word}</li>
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

import React, { Component } from 'react'
import './LutherLearned.css'

class LutherLearned extends Component {
  render() {
    // const events = [
    //   { id: 0, title: 'essay due' }
    // ]
    return (
      <div>
        <h2>Luther Learned</h2>
        <p>Finish each sentence. Drag a word from the right and drop it in the correct blank space.</p>
        <ol className='luther-learned-content'>
          <li>The church of Luther's time taught that God was only an angry judge who punished. This made people _________.</li>
          <li>Martin Luther read in the Bible that God loves people and sent his Son, Jesus, to be punished in our _________.</li>
          <li>The church taught that people needed to do good things to earn _________.</li>
          <li>Luther knew that he was very _________.</li>
          <li>By teaching that people could earn their own salvation, the church was saying that the saving work of Jesus was not _________.</li>
          <li>From reading the Bible, Luther learned that sinners only saved through _________.</li>
        </ol>
        <ul className='luther-learned-content'>
          <li>Jesus</li>
          <li>place</li>
          <li>enough</li>
          <li>Heaven</li>
          <li>afraid</li>
          <li>sinful</li>
        </ul>
      </div>
    )
  }
}

module.exports = LutherLearned

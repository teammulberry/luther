import React, { Component } from 'react'

class Bible extends Component {
  render() {
    // const events = [
    //   { id: 0, title: 'essay due' }
    // ]
    return (
      <div>
        <h2>Bible</h2>
        <p>As Martin Luther studied God's word and grew in faith, he learned to use Scripture to help with situations he faced.</p>
        <p><strong>You can do the same in your life!</strong></p>
        <ul>
          <li>A friend asks you to spend the weekend at his house. Your parents don't know that he's allowed to roam the street and do almost anything he pleases.</li>
          <li>While at a park during your summer rock climbing class, your instructor says that the rock formations are at least a billion years old.</li>
          <li>A classmate bugs you to look at magazines with photos of nude people in them.</li>
          <li>A neighbor tells her son that if he wants to be successful on earth and also gain heaven, he must share, be kind to others, and obey God.</li>
          <li>A church friend says, "When I turn 18, I'm not going to church every week. I'll just go once in a while. It's not like I don't have faith."</li>
        </ul>
        <ol>
          <li>Exodus 20:11a: In six days the Lord made the heaves and the earth, the sea, and all that is in them.</li>
          <li>Deutoronomy 5:12a: and Luke 4-16b: Observe the Sabbath day by keeping it holy. On the Sabbath day [Jesus] went into the synogauge, as was his custom.</li>
          <li>Ephesians 2:8,9: It is by grace you have been saved, through faith-and this is not from yourselves, it is the gift of God- not by works, so that no one can boast.</li>
          <li>Ephesians 6:1: Children, obey your parents in the Lord, for this is right.</li>
          <li>Philippians 4:8: Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable-if anything is excellent or praiseworthy-think about such things.</li>
        </ol>
      </div>
    )
  }
}

module.exports = Bible

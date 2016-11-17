import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import App from './App'
import LutherLearned from './routes/LutherLearned'
import Blessings from './routes/Blessings'
import Bible from './routes/Bible'
import LutherLutherans from './routes/LutherLutherans'
import './index.css'

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    childRoutes: [
      LutherLearned,
      Blessings,
      Bible,
      LutherLutherans
    ]
  }]
}

render((
  <Router
    routes={rootRoute}
    history={browserHistory}
  />
), document.getElementById('root'))

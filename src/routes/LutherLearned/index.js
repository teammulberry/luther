module.exports = {
  path: 'luther-learned',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/LutherLearned'))
    })
  }
}

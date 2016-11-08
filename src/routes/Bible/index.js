module.exports = {
  path: 'what-does-the-bible-say',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Bible'))
    })
  }
}

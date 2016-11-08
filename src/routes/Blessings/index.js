module.exports = {
  path: 'blessings-luther-and-me',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Blessings'))
    })
  }
}

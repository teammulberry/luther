module.exports = {
  path: 'luther-and-lutherans',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/LutherLutherans'))
    })
  }
}

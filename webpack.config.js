'use strict'

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'ZentCashUtils.js',
    library: 'ZentCashUtils',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty'
  },
  target: 'web'
}

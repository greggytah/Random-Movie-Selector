var m = require('mithril')

exports.controller = function (options) {}

exports.view = function (ctrl, options) {
  return m('.my-component', [
    m('h2', options.title)
  ])
}

var apiKey = "?api_key=da879f7e8e7d62569d51c4f04ec32b8a"

var baseUrl = "http://api.themoviedb.org/3/movie/"
var tape = require('tape')
var random = require('./')

tape('produces a weighted index', function (t) {
  var hits = [0, 0, 0]
  var weights = [0.3, 0.5, 0.2]

  for (var i = 0; i < 100000; i++) {
    hits[random(weights)]++
  }

  var props = hits.map(function (hit) {
    return Math.round(10 * (hit / 100000)) / 10
  })

  t.same(props, weights)
  t.end()
})

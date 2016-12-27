module.exports = random

function random (weights) {
  var ran = Math.random()
  var acc = 0

  for (var i = 0; i < weights.length; i++) {
    acc += weights[i]
    if (ran < acc) return i
  }

  throw new Error('Weights should add up to 1')
}

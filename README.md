# weighted-random

Produce a random integer based on weights.

```
npm install weighted-random
```

## Usage

``` js
var random = require('weighted-random')
var weights = [0.2, 0.5, 0.3] // should add up to 1
console.log(random(weights)) // random number between 0-2 (there are 3 weights)
```

## API

#### `var num = random(weights)`

Produce a random number between `0` and `weights.length - 1`.

The random number will be picked at the probability of defined be the weights array.
All probabilities in the weights array should add up to 1.s

## License

MIT

# tumbo.js
Randomly select elements from an array efficiently.

[![Build Status](https://travis-ci.com/georgeben/tumbo.js.svg?branch=master)](https://travis-ci.com/georgeben/tumbo.js)
[![Coverage Status](https://coveralls.io/repos/github/georgeben/tumbo.js/badge.svg?branch=feature-badges)](https://coveralls.io/github/georgeben/tumbo.js?branch=feature-badges)

Tumbo.js is an npm package to randomly select a desired number of elements from an array.

## Getting started.
Install this package from npm by running the command `npm install tumbojs`

## API
```js
var tumbo = require('tumbojs')
```

### tumbo.pick(array, n)
The pick method takes in an array and a number specifying the number of elements that should be selected randomly to form the new array.

```js
//EXAMPLE
const tumbo = require('tumbojs');
const myarr = ["Hello", "Hi", "Hey"];
const newarr = tumbo.pick(myarr, 2);

```

## Tests
Run `npm test` to run tests

### Author
George Benjamin

### License
[ISC](https://opensource.org/licenses/ISC)

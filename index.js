/**
 * @module tumbojs
 */

 /**
  * Randomly selects a specified number of elements from an array
  * @param {Array} arr - The array to select from
  * @param {number} n - The number of random elements to select from the array
  * @returns {Array} - A new array containing the randomly selected elements
  * @throws {IllegalArgumentException}
  */

  function pick(arr, n){
    if(typeof(arr) === 'undefined'){
        throw new Error('Illegal argument exception - array is not defined.');
    }

    if(typeof(n) === 'undefined'){
        throw new Error('Illegal argument exception - n is not defined.')
    }

    if(arr === null){
        throw new Error('Illegal argument exception  - array cannot be null.');
    }

    if(arr.length < 1){
        throw new Error('Illegal argument exception - array must at least a length of one.')
    }

    if(n < 1){
        throw new Error('Illegal argument exception - n canot be less than 1.');
    }

    if(typeof(n) !== 'number'){
        throw new Error('Type Error - n must be a number.');
    }

    if(n > arr.length){
        throw new Error('Illegal argument exception - n cannot be greater than the length of the array.');
    }

    let arrc = [];
    let i = arr.length;
    while(i--) arrc[i] = arr[i];
    let selected = [];
    for(let i = 0; i < n; i++){
        var r = Math.floor(Math.random() * arrc.length)
        selected.push(arrc[r]);
        arrc.splice(r, 1);
    }
    return selected;
  }

exports.pick = pick
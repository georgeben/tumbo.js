module.exports.pick = (arr, n) => {
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
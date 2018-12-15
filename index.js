module.exports.pick = (arr, n) => {
    let arrc = [];
    let i = arr.length;
    while(i--) arrc[i] = arr[i];
    console.log(arrc)
    let selected = [];
    for(let i = 0; i < n; i++){
        var r = Math.floor(Math.random() * arrc.length)
        selected.push(arrc[r]);
        arrc.splice(r, 1);
    }
    return selected;
}

/*
function pick(arr, n){
    let arrc = [];
    let i = arr.length;
    while(i--) arrc[i] = arr[i];
    console.log(arrc)
    let selected = [];
    for(let i = 0; i < n; i++){
        var r = Math.floor(Math.random() * arrc.length)
        selected.push(arrc[r]);
        arrc.splice(r, 1);
    }
    return selected;
}
*/
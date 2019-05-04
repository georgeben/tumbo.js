const { pick } = require('../index');
const expect = require('chai').expect

describe('Index.js', function(){
    let arr = ["George", "Ben", "James"]
    let numberOfRandomSelection = 2

    it('Should return the correct length pf picked items', function(){
        let picked = pick(arr, numberOfRandomSelection);
        expect(picked.length).to.be.equal(numberOfRandomSelection)
    })

    it('Should return elemnts of the array', function(){
        let picked = pick(arr, numberOfRandomSelection);
        picked.forEach(function(item){
            expect(arr).to.contain(item)
        })
    })

    it('Should throw an exception if array is undefined', function(){
        expect(function(){
            pick(undefined, numberOfRandomSelection)
        }).to.throw('Illegal argument exception - array is not defined.')
    })

    it('Should throw an exception if n is undefined', function(){
        expect(function(){
            pick(arr, undefined)
        }).to.throw('Illegal argument exception - n is not defined.')
    })

    it('Should throw an error if array is null', function(){
        expect(function(){
            pick(null, numberOfRandomSelection)
        }).to.throw('Illegal argument exception  - array cannot be null.')
    })

    it('Should throw an error if array is empty', function(){
        expect(function(){
            pick([], numberOfRandomSelection)
        }).to.throw('Illegal argument exception - array must at least a length of one.')
    })

    it('Should throw an error if n is less than 0', function(){
        expect(function(){
            pick(arr, -1)
        }).to.throw('Illegal argument exception - n canot be less than 1.')
    })

    it('Should throw an error if n is not a number', function(){
        expect(function(){
            pick(arr, "hi")
        }).to.throw('Type Error - n must be a number.')
    })

    it('Should throw an error if n is greater than the length of the array', function(){
        expect(function(){
            pick(arr, 5)
        }).to.throw('Illegal argument exception - n cannot be greater than the length of the array.')
    })

    it('Should not mutate the original array', function(){
        let lengthBefore = arr.length;
        pick(arr, numberOfRandomSelection);
        expect(lengthBefore).to.equal(arr.length)
    })

})
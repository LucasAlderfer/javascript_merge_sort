const assert = require('chai').assert

const sortNumbers = require('../mergeSort').sort
const joinArrays = require('../mergeSort').join
const subArrays = require('../mergeSort').subs
const mergeSort = require('../mergeSort').merge

describe('sort functionality', function() {
  context('sort function', function() {
    it('it can sort two numbers', function() {
      assert.deepEqual(sortNumbers(8,7), [7,8])
    })
  })
})

describe('join functionality', function() {
  context('join function', function() {
    it('it can join any two arrays in order', function() {
      assert.deepEqual(joinArrays([1,2,3],[4,5,6]), [1,2,3,4,5,6])
      assert.deepEqual(joinArrays([1,5,10],[3,4,8]), [1,3,4,5,8,10])
      assert.deepEqual(joinArrays([2,6,10],[1,22,23,48]), [1,2,6,10,22,23,48])
    })
  })
})

describe('sub arrays functionality', function() {
  context('subs function', function() {
    it('it can make smallest sub arrays from an array', function() {
      assert.deepEqual(subArrays([1,2,3,4,5,6,7,8,9]), [[1,2],[3,4],[5,6],[7,8],[9]])
      assert.deepEqual(subArrays([5,2,6,4,7,6,9,8,1]), [[5,2],[6,4],[7,6],[9,8],[1]])
    })
  })
})

describe('merge sort functionality', function() {
  context('merge function', function() {
    it('it can merge sort an array', function() {
      assert.deepEqual(mergeSort([3,5,1,7,2,8,15,11,20,23,6]), [1,2,3,5,6,7,8,11,15,20,23])
    })
  })
})

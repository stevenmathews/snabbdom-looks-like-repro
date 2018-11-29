const { input } = require('@cycle/dom')
const { assertLooksLike } = require('snabbdom-looks-like')

const requiredTrue = input({
  props: {
    required: true
  }
})

const emptyInput = input()

const requiredFalse = input({
  props: {
    required: false
  }
})

const requiredSquid = input({
  props: {
    required: 'squid'
  }
})

assertLooksLike(requiredTrue, emptyInput)
assertLooksLike(requiredTrue, requiredFalse)
assertLooksLike(requiredTrue, requiredSquid)

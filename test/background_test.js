ZAFClient = {
  init: function() {
    return {
      on: function() {}
    }
  }
}

function resetCalls () {
  setCalled = invokeCalled = 0
  lastCallArgs = []
}

var background = require('../assets/background')
var assert = require('assert')

var setCalled, invokeCalled, lastCallArgs
var client = {
  set: function() { setCalled++, lastCallArgs = Array.prototype.slice.call(arguments) },
  invoke: function() { invokeCalled++, lastCallArgs = Array.prototype.slice.call(arguments) }
}


// TESTS
resetCalls()
background.setIcon(client, {
  icon: 'w'
})
assert.deepStrictEqual(setCalled, 0)
assert.deepStrictEqual(invokeCalled, 1)
assert.deepStrictEqual(lastCallArgs, ['iconChars', 'W'])


resetCalls()
background.setIcon(client, {
  icon: 'wa'
})
assert.deepStrictEqual(setCalled, 0)
assert.deepStrictEqual(invokeCalled, 1)
assert.deepStrictEqual(lastCallArgs, ['iconChars', 'WA'])


resetCalls()
background.setIcon(client, {
  icon: 'what'
})
assert.deepStrictEqual(setCalled, 0)
assert.deepStrictEqual(invokeCalled, 1)
assert.deepStrictEqual(lastCallArgs, ['iconChars', 'WH'])


resetCalls()
background.setIcon(client, {
  icon: ':my-icon:'
})
assert.deepStrictEqual(setCalled, 1)
assert.deepStrictEqual(invokeCalled, 0)
assert.deepStrictEqual(lastCallArgs, ['iconSymbol', 'my-icon'])


resetCalls()
background.setIcon(client, {
  icon: '  :zd-svg-icon-16-icon:  '
})
assert.deepStrictEqual(setCalled, 1)
assert.deepStrictEqual(invokeCalled, 0)
assert.deepStrictEqual(lastCallArgs, ['iconSymbol', 'icon'])


resetCalls()
background.setIcon(client, {
  icon: ':zd-svg-icon-26-other-icon:'
})
assert.deepStrictEqual(setCalled, 1)
assert.deepStrictEqual(invokeCalled, 0)
assert.deepStrictEqual(lastCallArgs, ['iconSymbol', 'other-icon'])

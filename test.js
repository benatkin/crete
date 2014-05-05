var crete = require('./')
var assert = require('assert')

function test(desc, fn) {
  console.log('testing ' + desc)
  fn()
}

test('simple', function() {
  var ruleset = {
    sel: 'body',
    'background-color': '#eee',
    color: '#111'
  }
  var result = crete(ruleset)
  var lines = result.trim().split("\n").map(function(s) { return s.trim() })
  assert.equal(lines[0], 'body {', 'has selector and opening bracket')
  assert.equal(lines[lines.length-1], '}', 'ends with closing bracket')
  assert.equal(lines.length, 4, 'has 4 lines (2 for selector open/close, 2 for rules)')
  assert.ok(lines.indexOf('background-color: #eee') !== -1, 'has background-color rule')
  assert.ok(lines.indexOf('color: #111') !== -1, 'has color rule')
})

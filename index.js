function crete(ruleset) {
  var start = ruleset.sel + " {\n"
  var end = "}\n"
  Object.keys(ruleset).forEach(function(key) {
    if (['sel'].indexOf(key) !== -1) return;
    start += key + ': ' + ruleset[key] + ';' + "\n"
  })
  return start + end
}

module.exports = crete

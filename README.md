# crete - Simple CSS ruleset generation from a JavaScript object

This generates a CSS ruleset from an object of the form:

``` javascript
var ruleset = {
  sel: 'body',
  'background-color': '#eee',
  color: '#111'
}
```

The input isn't escaped, and thus this isn't recommended for
generating CSS for user input. It was created to make it slightly
easier to build pages in [requirebin](http://requirebin.com/).

To install:

```
npm install crete --save
```

The module is just one function. To use:

``` javascript
var crete = require('crete')
console.log(crete(ruleset))
```

This will output the following:

``` javascript
body {
background-color: #eee;
color: #111;
}
```

It returns rulesets with a newline at the end, so the returned CSS
can be joined together without newlines, as below:

``` javascript
var css = [
  {sel: '*', 'font-family': 'Helvetica, Arial, sans-serif'},
  {sel: 'h1, h2, h3', color: 'purple'}
].map(crete).join('')
```

It runs on modern browsers with a CommonJS build tool like
browserify and should run with old versions of IE if `Object.keys`
and `Array.prototype.shim` are shimmed.

# license

[MIT](bat.mit-license.org)

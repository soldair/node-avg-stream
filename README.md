[![Build Status](https://secure.travis-ci.org/soldair/node-avg-stream.png)](http://travis-ci.org/soldair/node-avg-stream)

avg-stream
==========

average the last n samples and emit the result as a stream

```js
var avg = require('avg-stream');

var s = avg(2);

s.on('data',function(d){
  console.log(d);
})

s.write({a:1,b:2})
s.write({a:3,b:1})
s.write({a:2,b:4})

```

output

```
{ a: 1, b: 2 }
{ a: 2, b: 1.5 }
{ a: 2.5, b: 2.5 }

```

var test = require("tape");
var avg = require('../');

test("can avg a stream of objects",function(t){
  t.plan(5);

  var s = avg(2);
  var last;

  s.on('data',function(d){
    last = d;
    t.ok(d,'should have obj');
    console.log(d);
  })
  
  s.write({a:1,b:2})
  s.write({a:3,b:1})
  s.write({a:2,b:4})

  t.equals(last.a,2.5,'should be the correct avg');
  t.equals(last.a,last.b,"if i did it right he avg should be the same on both");


});

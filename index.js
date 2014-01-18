var through = require('through');

module.exports = function(win){
  win = win||20;
  var store = {},nums,undef;
  var s = through(function(data){
    if(nums === undef) {
      nums = typeof data === 'number';
      if(nums) s.store = store = [];
    }

    if(nums) return this.queue(avg(store,data,win));
    
    var out = {};
    for(var k in data){
      if(!data.hasOwnProperty(k)) continue;
      if(!store[k]) store[k] = [];
      out[k] = avg(store[k],data[k],win);
    }
    this.queue(out);
  });
  s.store = store;
  return s;
}

function avg(arr,num,win){
  arr.push(num)
  if(!arr._total) arr._total = 0;
  arr._total += num;
  if(arr.length > win) {
    arr._total -= arr.shift();
  }
  return arr._total/arr.length;
}


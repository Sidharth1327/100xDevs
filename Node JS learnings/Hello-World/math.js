function add(a,b){
  return a+b;
}

function sub(a,b){
  return a-b;
}

module.exports = {addFn: add, subFn:sub}; 
//module eporting
/* 
export.add = (a,b) =>a+b; */
//another way of exporting , but exporting anonymous fns.
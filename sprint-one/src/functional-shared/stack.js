

var Stack = function() {  
  
  //this represents the initial state when a new stack is created
  var stack = {};

  //this represnts the "place" where items are stored on the stack 
  stack.storage = {};
  
  // cannot impliment the next line, we think the compiler will choke
  // var size = 0;


  stack.result = 0;
  stack.add = stackMethods.add;

  stack.size = stackMethods.size;
  
  //need to make these
  stack.push = stackMethods.push;
  stack.pop = stackMethods.pop;

  return stack;
}  



var stackMethods = {};

stackMethods.size = function(){
  return this.result;
}

stackMethods.push = function(value){
  this.result++;
  console.log(this.storage)
  return this.storage[this.result] = value;
}

stackMethods.pop = function(){
  return this.result;
}

var extend = function(copyTo, copyFrom) {
    for (var property in copyFrom) {
        copyTo[property] = copyFrom[property];
    }
};

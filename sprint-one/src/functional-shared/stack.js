

var Stack = function() {  
  
  //this represents the initial state when a new stack is created
  var stack = {};

  //this represnts the "place" where items are stored on the stack 
  stack.storage = {};
  
  // cannot impliment the next line, we think the compiler will choke
  // var size = 0;

  //sets the stack size to zero when a new stack is instanciated
  stack.indexOfLastItem = 0;

  //this sends the stack into the specified stackMethod(either push or pop)
  extend(stack, stackMethods)

  //this return the stack, which is an objects. All properties are functions.
  return stack;
}  


//this contains all the functions on the stack
var stackMethods = {};

stackMethods.size = function(){
  return this.indexOfLastItem;
}

stackMethods.push = function(value){
  this.indexOfLastItem++;
  console.log('this.indexOfLastItem in push:', this.indexOfLastItem);
  return this.storage[this.indexOfLastItem] = value;
}

stackMethods.pop = function(){
  if(this.indexOfLastItem > 0){
    this.indexOfLastItem--;
    return this.storage[this.indexOfLastItem+1];
  }
}

var extend = function(copyTo, copyFrom) {
    for (var property in copyFrom) {
        copyTo[property] = copyFrom[property];
    }
};

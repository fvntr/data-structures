var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //this.stack = stackMethods; 
  this.storage = {};
  this.indexOfLastItem = 0;

};
	
var stackMethods ={};


stackMethods.size = function(){
  //this refers to the specific instance of the stack that is calling this method
  this.indexOfLastItem;
}
stackMethods.push = function(value){
  //this refers to the specific instance of the stack that is calling this method
  this.indexOfLastItem++;
  this.storage[this.indexOfLastItem] = value;
}
stackMethods.pop = function(){
  //this refers to the specific instance of the stack that is calling this method
  if(this.indexOfLastItem > 0){
    this.indexOfLastItem--;
  }
    this.storage[this.indexOfLastItem+1];
}

var stack = new Stack();



console.log(stack);
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //this.stack = Stack.prototype; 
  this.storage = {};
  this.indexOfLastItem = 0;

};


Stack.prototype.size = function(){
  //this refers to the specific instance of the stack that is calling this method
  return this.indexOfLastItem;
}
Stack.prototype.push = function(value){
  //this refers to the specific instance of the stack that is calling this method
  this.indexOfLastItem++;
  return this.storage[this.indexOfLastItem] = value;
}
Stack.prototype.pop = function(){
  //this refers to the specific instance of the stack that is calling this method
  if(this.indexOfLastItem > 0){
    this.indexOfLastItem--;
  }
  
  return this.storage[this.indexOfLastItem+1];
}

//
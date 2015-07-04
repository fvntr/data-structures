/*
A hashTable class, in pseudoclassical style:
First: Play with each of the helper functions provided to get a sense of what they do.
You will use the provided hash function to convert any key into an array index. Try interacting with it from the console first.
A limitedArray helper has been provided for you. Use it to store all inserted values. Try interacting with it from the console first.
Make the following properties appear on all instances:
An .insert() method
A .retrieve() method
A .remove() method

*/



var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, [v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i)[0];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.set(i, [null]);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

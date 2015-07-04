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
  // this.values = [];
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  console.log('i :', i);
  console.log('k :', k);
  console.log('v :', v);
  console.log('this._storage', this._storage);
  // console.log('this.values', this.values);
  // console.log('this.values[i]', this.values[i]);
  // console.log('this._storage[i]', this._storage[i]);

  this._storage.set(i, v);
  // this.values[i].push(k,v);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
	// var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log('i :', i);
  console.log('k :', k);
  console.log('this._storage :', this._storage);
  console.log('this._storage', this._storage);
	
	return this._storage.each[k] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

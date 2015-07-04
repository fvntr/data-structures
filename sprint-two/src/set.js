/*
A set class, in prototypal style, with the following properties:
An .add() method, takes any string and adds it to the set
A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
A .remove() method, takes any string and removes it from the set, if present
*/

var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this._storage.push(item);
};

setPrototype.contains = function(item){
	if(this._storage.indexOf(item) !== -1){
		return true
	};
	return false
};

setPrototype.remove = function(item){
	if(this._storage.indexOf(item) !== -1){
		this._storage.splice(this._storage.indexOf(item),1);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

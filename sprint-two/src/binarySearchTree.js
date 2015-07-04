/*
Implement a binarySearchTree class with the following properties:
A .left property, a binary search tree (BST) where all values are lower than than it the current value.
A .right property, a BST where all values are higher than than it the current value.
A .insert() method, which accepts a value and places in the tree in the correct position.
A .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
A .depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
*/

var BinarySearchTree = function(value){
	var bst = Object.create(BinarySearchTree.prototype);

  bst.value = value;
  bst.left = null;  
  bst.right = null;  
	
	return bst;
};


BinarySearchTree.prototype.insert = function (value){
  var newNode = BinarySearchTree(value);

  if(value > this.value){
    if(!this.right){
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  } else {
    if(!this.left){
      this.left = newNode; 
    } else {
      this.left.insert(value);
    }
  } 
};

BinarySearchTree.prototype.contains = function (target){

  console.log('target ', target);
  console.log('this.value ', this.value);

  if (target === this.value){
    return true;
 
  } else if(target > this.value) {
    if(!this.right){
    	return false;
    }
    return this.right.contains(target);
  
  } else if(target < this.value) {
    if(!this.right){
    	return false;
    }
    return this.left.contains(target);
  
  } else {
    return false;
  } 
};  

BinarySearchTree.prototype.depthFirstLog = function (cb){


}; 


/*
 * Complexity: What is the time complexity of the above functions?
 */

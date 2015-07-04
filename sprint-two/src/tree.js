/*
A tree class, in functional with shared methods style, with the following properties:
.children property, an array containing a number of subtrees
.addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
A .contains() method, takes any input and returns a boolean 
reflecting whether it can be found as the value of the target node or any descendant node
What is the time complexity of the above functions?


*/


var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	//this represents an instantiation of a tree
	//addChild pushes a new instantiation of tree with the specific value being passed in 'this'
	this.children.push(Tree(value));
};

treeMethods.contains = function(target){
	// console.log(this);

	//check if current tree value === target
	//if yes, return true
	//else check the children nodes, and repeat process
		//check if current tree value === target
		//if yes, return true
		//else if the current tree value is null, 
			//return false
		//else check if there are children node
			//if yes, check each child's value
			//if no, return false
	var traverseTree = function(treeNode){
		if(treeNode.value === target){
			return true;
		} else if (treeNode.value === null){
			return false;
		} else {
			if(treeNode.children.length > 0){
				// console.log('treeNode.children.length', treeNode.children.length);
				for(var i = 0; i < treeNode.children.length; i++){
					// console.log('target', target);
					// console.log('treeNode.children', treeNode.children[i]);
					traverseTree(treeNode.children[i]);
				}
			} else {
				return false;
			}
		}		
	}(this.children[0]);

	return traverseTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

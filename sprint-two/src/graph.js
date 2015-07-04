/*
Implement a graph class, in pseudoclassical style, with the following properties:
It is an undirected graph. It does not have to be 'connected'.
An .addNode() method that takes a new node and adds it to the graph
A .contains() method that takes any node and returns a boolean reflecting whether it can be found in the graph
A .removeNode() method that takes any node and removes it from the graph, if present. All edges connected to that Node are removed as well.
An .addEdge() method that creates a edge (connection) between two nodes if they both are present within the graph
A .hasEdge() method that returns a boolean reflecting whether or not two nodes are connected
A .removeEdge() method that removes the connection between two nodes
A .forEachNode() method that traverses through the graph, calling a passed in function once on each node

*/

var Graph = function(){
	//stores the values
	this.storage = [];
	//tracks the edges associated with the values
	this.edge = [];
};

Graph.prototype.addNode = function(node){
	//when we add a new node to the storage arry, also add it AS AN ARRAY to the edge array
	this.edge.push([node]);
	//add the new node to the storage array and return it
	return this.storage.push(node);
};

Graph.prototype.contains = function(node){
	//search for the target value by looping through the storage array 
	//if the value is in the storage array return true
	//else return false
	for (var i = 0; i < this.storage.length; i++){
		if(this.storage[i] === node){
			return true;
		}
	}
	return false;
};

Graph.prototype.removeNode = function(node){
	//search for the target node to delete by looping through the storage array 
	//if the value is in the storage array, 
		//delete if from the edage array and from the storage array
		//return the deleted value
	for (var i = 0; i < this.storage.length; i++){
		if(this.storage[i] === node){
			var temp = this.storage[i];
			this.storage.splice(i,1);
			this.edge.splice(i,1);
			return temp;
		}
	}

};

Graph.prototype.hasEdge = function(fromNode, toNode){
	var result = false;
		
	for(var i=0; i<this.edge[this.storage.indexOf(fromNode)].length; i++){
		if(this.edge[this.storage.indexOf(fromNode)][i] === toNode){
			result = true;
		}
	}

	return result;

};

Graph.prototype.addEdge = function(fromNode, toNode){
	this.edge[this.storage.indexOf(fromNode)].push(toNode); 
	this.edge[this.storage.indexOf(toNode)].push(fromNode); 



};

Graph.prototype.removeEdge = function(fromNode, toNode){

};

Graph.prototype.forEachNode = function(cb){
	for(var i = 0; i<this.storage.length; i++){
		cb(this.storage[i]);
	}	
}
/*
 * Complexity: What is the time complexity of the above functions?
 */




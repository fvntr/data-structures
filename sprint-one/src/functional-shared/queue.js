var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

	var queue = {};

	queue.storage = {};

	queue.indexOfLastItem = 0;
	queue.indexOfFirstItem = 0;

	extend(queue, queueMethods);

	return queue;
};

var queueMethods = {};

queueMethods.size = function(){
	return this.indexOfLastItem - this.indexOfFirstItem;
};

queueMethods.enqueue = function(value){
	this.indexOfLastItem++;
	return this.storage[this.indexOfLastItem] = value;
}

queueMethods.dequeue = function(){

	if(this.indexOfLastItem - this.indexOfFirstItem){
		this.indexOfFirstItem++;
	}
	
	return this.storage[this.indexOfFirstItem];
}

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	//
  	this.storage = {};
	this.indexOfLastItem = 0;
	this.indexOfFirstItem = 0;


};


Queue.prototype.size = function(){
	return this.indexOfLastItem - this.indexOfFirstItem;
};

Queue.prototype.enqueue = function(value){
	this.indexOfLastItem++;
	return this.storage[this.indexOfLastItem] = value;
}

Queue.prototype.dequeue = function(){

	if(this.indexOfLastItem - this.indexOfFirstItem){
		this.indexOfFirstItem++;
	}
	
	return this.storage[this.indexOfFirstItem];
}
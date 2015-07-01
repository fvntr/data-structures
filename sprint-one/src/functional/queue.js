var Queue = function(){
  var someInstance = {};
  var front = 0;
  var end = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    someInstance[end] = value;
    end++;
  };

  someInstance.dequeue = function(){
    var temp = someInstance[front];
    delete someInstance[front];

    if(end - front >0){
     front++;
    }
    return temp;
  };

  someInstance.size = function(){
    return end - front; 
  };

  return someInstance;
};



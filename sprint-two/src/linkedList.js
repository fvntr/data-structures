/*
A linkedList class, in functional style, with the following properties:
 .head property, a linkedListNode instance
 .tail property, a linkedListNode instance
 .addToTail() method, takes a value and adds it to the end of the list
 .removeHead() method, removes the first node from the list and returns its value
 .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
 */
var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //instantiates a new node
    var localNode = Node(value); 

    if(list.tail === null){
      list.head = localNode;

    } else {
      //update the current tail node to point to (ie the node.next value on that node should be) the new value that is being passed in and will become the new tail node     
      list.tail.next = localNode;
    };
    // console.log("next before :", list.tail);
    list.tail = localNode;
    // console.log("next after :", list.tail);
  };

  list.removeHead = function(){

    //remove first node in list
    //return value
    //should remove the head from the list when removeHead is called

    var temp = list.head.value; 
  
    list.head = list.head.next;

    return temp; 

  };

  list.contains = function(target){
    //we are creating a fxn that traverses each node of the linkedlist, starting at the head
    var traverseLinkedList = function(node){
      //check if the node.value is the same as the target
      if(target === node.value){ 
        //if yes, return true (and we want to exit the fxn)
        return true;

      //if not, check if the current's node next key is null
      } else if(node.next === null){        
        //if yes (if the current's node next key is null), we are at the end of the list. the target is not in the list (return false and we want to exit the fxn)
        return false;
      } 

      //if there is a next node value and we have to run the function on the node's next value
      return traverseLinkedList(node.next);

    };

    return traverseLinkedList(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

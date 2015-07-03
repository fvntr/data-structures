
/*
A linkedList class, in functional style, with the following properties:
 .head property, a linkedListNode instance
 .tail property, a linkedListNode instance
 .addToTail() method, takes a value and adds it to the end of the list
 .removeHead() method, removes the first node from the list and returns its value
 .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
 */

/*

linkedList.addToTail(4);
linkedList.addToTail(5);
expect(linkedList.head.value).to.equal(4);
linkedList.removeHead();
expect(linkedList.head.value).to.equal(5)


*/


var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    
    var pod = Node(value); 

    if(list.tail === null){
      list.head = Node(value);

    } else {
      //update the current tail node to point to (ie the node.next value on that node should be) the new value that is being passed in and will become the new tail node
      
      console.log("next before :", list.tail.next);
      list.tail.next = pod;
      console.log("next after :", list.tail.next);
    };
    // console.log("next before :", list.tail);
    list.tail = pod;
    // console.log("next after :", list.tail);
  };

  list.removeHead = function(){

    //remove first node in list
    //return value
    //should remove the head from the list when removeHead is called


    var temp = list.head.value; 

    // console.log("before", list.head.next);
    // console.log("before list", list);

    //console.log("before", "head:", list.head, "tail:", list.tail);
    list.head = list.head.next;
    // console.log("after", "head:", list.head, "tail:", list.tail);
    //console.log("after", list.head);
    return temp.value; 

  };

  list.contains = function(target){
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

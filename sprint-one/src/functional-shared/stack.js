

var Stack = function() {   // Hey! Rewrite in the new style. Your code will
// wind up looking very similar,   // but try not not reference your old code in
// writing the new style.   // var size = 0;

  // console.log( 'stackMethods.size :', stackMethods.size);

  //implement this somewhere here 
  //is it like this.method
  //
  var stack = {};

  //stack.num = 0;
  testAB = 0;

  stack.size = stackMethods.size;
  stack.add = stackMethods.add;
  //stack.add = stackMethods.add;
  // stack.add = extend(stack, stackMethods)
  // stack.size = 0;
  // var size = function(){ return 0;}

	//  console.log('Stack.size :', stack.size);
	//testAB++;
  //console.log('testAB++ :', testAB++);
  
  return stack;

}  



var stackMethods = {

	size : function( ){return testAB;},
  add : function( ){
    stack.push();
    return testAB + 2;},
	//size : function(){return this.size;},
	//console.log('this.size; is: ', this.size)
	//shift
	// add: function(){
 //    testAB++; 
 //    console.log('testAB++ :', testAB++); 
 //    return testAB;}
	// //pop

	//size: 0
}


// var extend = function(copyTo, copyFrom) {
//     for (var property in copyFrom) {
//         copyTo[property] = copyFrom[property];
//     }
// };


  
// var testA = new Stack();
// console.log('Stack.size :', stack.size);
// console.log('stackMethods.size :', stackMethods.size);
//console.log('testA is :', testA);

// at Context.<anonymous> (file:///Users/student/Desktop/2015-06-data-structures/sprint-one/spec/specs.js:42:15)
//     at Test.require.register.Runnable.run (

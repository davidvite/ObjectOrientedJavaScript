// Since this pattern is so common, the language designer decided to add official conventions to support it.
// We are making a methods object in from line 6 to line 10, right ? and we are adding this object as a property
 // of the Car function object? If we are planning to use prototypes for all of our classes,
  // we’ll probably be doing this every time. Since building a holder object for methods and attaching it as a property
   // to the constructor function is so common, the language does this for you automatically.
// Whenever a function is created , it will have an object attached to it, that you can use as a container
 // for methods just in case you plan on using that function, to build instances of a class.
// The crazy thing is,  this occasionally handy property, the one the language is going to build for you,
 // is not stored at the key.method. although we had chosen to store our handy method container object at the key.methods .
  // The default object that comes with every function, is stored at the key.prototype.

var Car = function(loc){
	var obj= Object.create(Car.prototype);
	obj.loc = loc;
	return obj;
	};

Car.prototype = {
	move : function(){
	this.obj++;
	},
 	on = function(){
	// something here
	},
 	off = function(){
	// something else here
	}
};

// The language creates and object but do not delegates to key.methods instead delegates to key.prototype.
// Since I know this object is going to be created for me, and all I really need to do es add a move method, 
// I can take our the object literal. And all I really need to do, is define a method .move on an existing .prototype
//  object (line 6above). Since we change the Car.method object the new Car instance can’t reach car.methods because 
//  we change it so we need to refactor line 2 in order to reflect the use of the provider container object, 
//  which is now stored at Car. prototype.

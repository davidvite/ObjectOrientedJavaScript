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

Car.prototype.move = function(){
	this.obj++;
};
console.log(Car.prototype.constructor);
console.log(amy.constructor);
log(amy instanceof Car) ; 
// The language creates and object but do not delegates to key.methods instead delegates to key.prototype.
// Since I know this object is going to be created for me, and all I really need to do es add a move method, 
// I can take our the object literal. And all I really need to do, is define a method .move on an existing .prototype
//  object (line 6above). Since we change the Car.method object the new Car instance can’t reach car.methods because 
//  we change it so we need to refactor line 2 in order to reflect the use of the provider container object, 
//  which is now stored at Car. prototype.

// How prototypes affect in-memorymodel (Nothing)
// Now instead of copying all the methods into the function we make it fallback into the key.prototype .
// .prototype nothing has change and the don’t affect how the code works we just chose to use another
//  name to talk about our stooges object and it was provided by the language.
// This is purely cosmetic to use .prototype instead of .method

// Note***
// The car function does not delegates it’s failed lookups to the object stored at Car.prototype.
//  It was not doing that with Car.methods, so we shouldn’t expect that.
// Other point is that result object from the Car function only delegates to Car.prototype because 
// of our own call to the object.create function( Car.prototype in the parenthesis)  and not because 
// we are using the key.prototype to store this object that we have a relationship between instances 
// and the Car.prototype object.
// So you should really see this .prototype object as a freely provided object for storing things with 
// no additional special characteristics.

// If you want to can substitute mentally prototype with methods if that helps.

// Prototype ambiguity .
// methods container object is the prototype object

// Some tricky words
// If someone says object one’s prototype is object two, a reasonable interpretation would be to think that 
// fail  lookups on this first object should fall through to the second one. So you might say Amy’s prototype 
// is car.prototype, but this is not the relationship that car has with car.prototype. In that case car is a function object
//  and fail lookups on it will fall through to some function prototype , where all function object delegate their fail lookups.

// The car function relationship with car.prototype is very different from the one that Amy has with car.prototype .

// The relationship reflects the second interpretation of the statement, “object one’s prototype is object two”. 
// The relationship is that when a car function runs, it will create objects that delegate their fall lookups to car.prototype .

// So in this sense, you might say, cars prototype is car.prototype . So to review, saying Amy’s prototype is  car.prototype 
// means something different from saying cars prototype is car.prototype even though those sentences look so similar.
// Be aware that is easy to confuse those 2 uses of the word prototype .



// Prototype constructor

// prototypes objects come with one extra convenient property that almost no other object has. Every dot prototype object 
// has a .constructor property with points back to the function is came attached to. Thus there is a mutual linking between
//  any new function and it’s companion.protoype object, because car links to .prototype object , 
//  and prototype links back to the car object Car.prototypeconstrutor is car itself . The main use is that you can figure out
//   which constructor function built a certain object. All instances of a class delegate their fail lookups to their prototype, 
//   and so they should all report as having the same constructor function .

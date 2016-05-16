// It's call pseudoclassicas because it attempts to resemble the class system from other languages by adding
// a thin layer of syntactic conveniences. Because we are planning to make a lot of calsses in our programs
// there's a lot of code that would get repetitive to repeat every time.


var Car = function(loc){
	// this = Object.create(Car.prototype)
	this.loc = loc;
	// return this
	};

Car.prototype.move = function(){
	this.loc++;
};

// CONSTRUCTOR MODE
// To avoid repeating lines 2 and 4 Js has provide that whenever we choose to use the keyword new in front of a function 
// invocation , our function is going to run in a special mode called Constructor Mode. In Constructor mode we can expect 
// a lot of this work to be done for us automatically. So wha its constructor mode?
// Basically is the way for your interpreter to insert a few lines of operation into your code because it knows that you’re
//  going to need them to be done whenever you’re instantiating a new object .

// It temporary makes your function tun as if there was some extra code at the beginning and end. Even though you will never
//  have typed that code. The operation it’s going to insert are basically doing the same work as the lines you’re likely write 
//  in your prototypal classes.

// Styles of writing classes

// Functional , prototypal and pseudoclassical pattern have two main section that are crucially important.

// One section, you will find specifying how all the instances of a class should be similar. In the case of 
// the pseudo classical pattern these similarities are generally stored as properties of the prototype object. 
// (line 8-10 above)
// In the other section (lines 1-3) you’ll be writing code that specifies how each instance should be different 
// from all the other instances. As with most programming languages, this will take place inside the body of the
//  construction function, and it’ll allow us to specify how one instance of the class will be different from another
//   instance of the class. All the work that gets done to specify that Amy and Ben have unique locations is done 
//   inside the constructor function.

// If we look back at the functional version of this class for a moment is interesting to notice that functional 
// classes without shared methods make no such distinction. In this style, all the code for both categories appear
//  in one place. The similarities and the differences across instances appear here, indented two spaces inside the 
//  car function Depending on your perspective, you could call this an ASSET or a sailing of the functional pattern
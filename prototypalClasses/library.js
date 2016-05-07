// Check Evernote prototypal classes
// The steps for making the class in this prototypal pattern are pretty clear :
// - A function that allow us to make instances (line 1-5 above)
// - A line in that function that generates the new instance object. (line 2 above)
// - a delegation from the new to some prototype object. ( the parenthesis in line 2 to the prototype object in line -10).
// - And some logic for augmenting the object with properties that make it unique from all the other objects of the same class.

var Car = function(loc){
	var obj= Object.create(Car.methods);
	obj.loc = loc;
	return obj;
	};

Car.methods = {
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

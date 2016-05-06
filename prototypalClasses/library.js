// improve performance using prototype Chain, any object can be make to delagate its fail lookop property lookup to another object
// Instead of using extend to copy all of the methods over, we might be able to store all the shared methods and make our instances
// delagated to that shared prototype object.
//The problem here is tha we are using OBJECT LITERAL, in order to build the brand new object, that's going to be and instance
// of car , whatever you use in object literal to create an object you don't get to define what the prototype of that new object
// is going to be. So we will nedd to use the oter technique to CREATE OBJECT wich is Object.create that technique does allow us to
// set up the prototype of the new object, now whatever we put in the parentesis after the Object.create is going to be the thing
// that our new object delegates to. Now because we are delagathing the fell back of Car to Car.methods we do not need to copy
// all the methods into the extend so we delete it, this is because we are using dot notations instead of object literal.
// But we still need to make sure this load propertygets added to our new object since is no longer in line as part of an
// object literal. We are instead using object.create syntax as of this change we have arrived at the completed prototypal
// pattern of writing your class ading dot notation

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

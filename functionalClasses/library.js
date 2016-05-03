// there is a way to include all the methods we want on every car object as a resul of having them in a list somewhere.
// extend methods using extend and creating an object with the methods.

var Car = function(loc){
	var obj= {loc: loc};
	extend(obj, methods);
	return obj;
	};

var methods = {
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


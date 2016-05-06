// Remember that functions are specialized objects function are capable of beeing call and also store properties.
// just like any other object 

var Car = function(loc){
	var obj= {loc: loc};
	extend(obj, Car.methods);
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


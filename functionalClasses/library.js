// At this point is nice the class but there is a little problem the var methods is a little confuse so instead of using it like that
// we wil add it as a property of the Car function called methods. (encapsulating )

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


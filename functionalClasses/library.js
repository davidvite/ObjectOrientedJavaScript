// imagine that now we want to add more functions and assigning each one as a property of the object, we would still having the issue 
// of naming it in two places the first is when we are building the function and the second is when we want to assign it over
// onto every car object . 

var Car = function(loc){
	var obj= {loc: loc};
	obj.move = move;
	obj.on = on;
	obj.off = off;
	return obj;
	};

var move = function(){
	this.obj++;
};

var on = function(){
	// something here
};
var off = function(){
	// something else here
}


// In order to avoid duplication we need to put the some fucntions out of th econstructor
// Also we change obj for the parameter this in the move function becuase It won't have access
// this replaces obj because this function is being called as a method on objects created with car

var Car = function(loc){
	var obj= {loc: loc};
	obj.move = move;
	return obj;
	};

var move = function(){
	this.obj++;
};
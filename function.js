
var calcSum = function(a,b){
    return a*b;
    
}
calcSum(5,3);


var neverGiveUp = function(easy){
    console.log("Never give up on",easy);
}
neverGiveUp("life");



var jumpingJacks = function(noOfTimes){
    for (var i=0; i<noOfTimes; i++){
        if (i===5){
            continue;
        };
        console.log(i,"number of jacks jumping");
        
    };
    
};
jumpingJacks(11);

var double = function ( number ) {
	return number * 2;
};

double(3);
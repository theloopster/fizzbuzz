$(document).ready(function(){
for (var i=1;i<=100;i++){
if(i%3==0){
	if(i%5==0){
		var output="fizz buzz";
	}
	else
		{ var output = "fizz";}
}
else if(i%5==0){
	var output = "buzz";
}
else{
	var output = i;
}

		$('.output').append(output+'<br>');
}
})	
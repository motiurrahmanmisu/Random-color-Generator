document.querySelector("#button").addEventListener("click",function(){
	
	var hexBase =["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	var color="#";

	for(var i =0;i <6;i++){
		var random = Math.round(Math.random() * 15);
		var demo = hexBase[random];
		color += demo;
	}
	
document.querySelector("#container").style.backgroundColor=color;
document.querySelector("#output").style.color=color;
document.querySelector("#output").innerHTML = color;
	
});

let navbar  = document.querySelector(".container_navbar");
let num = 1
function menu(){
function myFunction(x) {
 if (x.matches) {
 	num ++ 
	 	if(num >= 2){
	 		navbar.style = "height:289px; transition:all 0.3s;"
	 		num = 0
	 	}
	 	else{
	 		navbar.style = "height:65px; transition:all 0.3s;"
	 	}
 }
 else{
 		navbar.style = "height:80px;"
 }
}

var x = window.matchMedia("(max-width:768px)")
myFunction(x)
x.addListener(myFunction)
};
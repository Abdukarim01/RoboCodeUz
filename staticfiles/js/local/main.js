/* START NAVBAR CONTROLR */

function controlnavbar() {
 function media1(x) {
  let line = document.querySelectorAll(".line");
  var navbar = document.querySelector('.navbar_right');
  if (x.matches) { 
        if (navbar.clientHeight) {
        navbar.style.height = 0;
        line.forEach( function(e){
          e.classList = "line"
        })
      }else{
        var wrapper = navbar.querySelector("ul")
        navbar.style.height = wrapper.clientHeight + "px";
        line.forEach( function(e){
          e.classList = "line for_navbar_control"
        })
      }
  } else {
      navbar.style.height = "";
  }
}
var x = window.matchMedia("(max-width: 992px)")
media1(x) 
x.addListener(media1)
}

/* END NAVBAR CONTROLR */



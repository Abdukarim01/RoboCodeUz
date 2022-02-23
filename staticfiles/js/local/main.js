/* START NAVBAR CONTROLR */

let navnum = 0;

function controlnavbar() {
   navnum++
   function media1(x) {
      let line = document.querySelectorAll(".line");
      var navbar = document.querySelector('.navbar_right');
      if (x.matches) { 
            if(navnum >= 2){navnum = 0}
            if (navnum == 0) {
                  navbar.style.height = 0;
                  line.forEach( function(e){
                    e.classList = "line"
                  })
            }if(navnum == 1){
                  var wrapper = navbar.querySelector("ul")
                  navbar.style.height = wrapper.clientHeight + "px";
                  line.forEach( function(e){
                    e.classList = "line for_navbar_control"
                  })
          }
      } else {
          navnum = 0
          navbar.style.height = "";
      }
  }
  var x = window.matchMedia("(max-width: 992px)")
  media1(x) 
  x.addListener(media1)
}

/* END NAVBAR CONTROLR */

/* START TYPER SLIDE */
var typerslide = new Swiper(".typer_slide", {
    slidesPerView: 1,
    freeMode: true,
    cssMode: true,
    autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
});
/* END TYPER SLIDE */

/* COURSES ANIMATE */

let course = document.querySelectorAll(".section_course");
window.addEventListener('scroll', function(){
let boundTop = Math.ceil(course[5].getBoundingClientRect().top);
if(boundTop <= 180){
    course.forEach((e)=>{
        e.style = "position:inherit;"
    })
}
else{
    let i = 0;
    course.forEach((e)=>{
        i+=30
        e.style = `position:sticky; top:${i}px;`
    })
    i = 0;
}
})

/* ENS COURSES ANIMATE*/

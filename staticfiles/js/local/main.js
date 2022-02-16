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





// window.addEventListener('scroll', function() {
//             function animfunctionmedia(y) {
//                     if (y.matches) {  
//                         let element = document.querySelectorAll(".course_container");
//                         element.forEach( (e)=>{
//                         var position = e.getBoundingClientRect();
//                         // checking for partial visibility
//                         if(position.top < window.innerHeight - 250) {
//                         e.style = "transform:translateX(0%); opacity: 1;"
//                         }else{
//                         e.style = ''
//                         }

//                         })
//                     } 
//             }  

//             /* FOR MEDIA */

//             var y = window.matchMedia("(max-width: 768px)")
//             animfunctionmedia(y) 
//             y.addListener(animfunctionmedia)

//             function animfunctionmedia2(z) {
//                     if (z.matches) {  
//                         let element = document.querySelectorAll(".course_container");
//                         element.forEach( (e)=>{
//                         var position = e.getBoundingClientRect();
//                         // checking for partial visibility
//                         if(position.top < window.innerHeight - 200) {
//                         e.style = "transform:translateX(0%); opacity: 1;"
//                         }else{
//                         e.style = ''
//                         }

//                         })
//                     } 
//             }  

//             var z = window.matchMedia("(min-width: 768px)")
//             animfunctionmedia2(z) 
//             z.addListener(animfunctionmedia2)
// });

/* ENS COURSES ANIMATE*/

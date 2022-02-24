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
    
function coursemedia(z) {
  let boundTop = Math.ceil(course[5].getBoundingClientRect().top);
  if (z.matches) {
            let course_top1 = 50;
            course.forEach(function(e){
                course_top1 += 10;
                let course_position1 = Math.ceil(e.getBoundingClientRect().top);
                if(course_position1 <= course_top1){
                    e.querySelector(".course_container").classList = "course_container course_change"
                } 
                else{
                    e.querySelector(".course_container").classList = "course_container "
                }       
            }) 
            if(boundTop <= 60){
                course.forEach((e)=>{
                    e.style = ""
                })

                course[0].style = `transform:translateY(${course[4].clientHeight + course[3].clientHeight + course[2].clientHeight + course[1].clientHeight + course[0].clientHeight + 48}px);`
                course[1].style = `transform:translateY(${course[4].clientHeight + course[3].clientHeight + course[2].clientHeight + course[1].clientHeight +38}px);`
                course[2].style = `transform:translateY(${course[4].clientHeight + course[3].clientHeight + course[2].clientHeight +28}px);`
                course[3].style = `transform:translateY(${course[4].clientHeight + course[3].clientHeight +18}px);`
                course[4].style = `transform:translateY(${course[4].clientHeight +8}px); `
                
            }
            else{
                let i = 0;
                course.forEach((e)=>{
                    i+=10
                    e.style = `position:sticky; top:${i}px;`
                })
                i = 0;
            }
    
  } else {

            let course_top2 = 50;
            course.forEach(function(e){
                course_top2 += 30;
                let course_position2 = Math.ceil(e.getBoundingClientRect().top);
                if(course_position2 <= course_top2){
                    e.querySelector(".course_container").classList = "course_container course_change"
                } 
                else{
                    e.querySelector(".course_container").classList = "course_container "
                }       
            }) 

             if(boundTop <= 180){
                course.forEach((e)=>{
                    e.style = ""
                })
                
                course[0].style = `transform:translateY(${course[4].clientHeight + course[3].clientHeight + course[2].clientHeight + course[1].clientHeight + course[0].clientHeight -48}px);`
                course[1].style = `transform:translateY(${course[4].clientHeight + course[3].clientHeight + course[2].clientHeight + course[1].clientHeight -38}px);`
                course[2].style = `transform:translateY(${course[4].clientHeight + course[3].clientHeight + course[2].clientHeight-28}px);`
                course[3].style = `transform:translateY(${course[4].clientHeight + course[3].clientHeight -18}px);`
                course[4].style = `transform:translateY(${course[4].clientHeight -9}px);`
            }
            else{
                let i = 0;
                course.forEach((e)=>{
                    i+=30
                    e.style = `position:sticky; top:${i}px;`
                })
                i = 0;
            }
  }
}

var z = window.matchMedia("(max-width:992px)")
coursemedia(z) 
z.addListener(coursemedia)

 })


/* ENS COURSES ANIMATE*/

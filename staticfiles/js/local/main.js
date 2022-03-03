/* MENU CONTROL */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if(Math.ceil(window.scrollY) >= 500){
    if (prevScrollpos > currentScrollPos) {
    document.querySelector(".section_navbar").classList = "section_navbar for_navbar2"
  } else {
     document.querySelector(".section_navbar").classList = "section_navbar for_navbar"
  }
  prevScrollpos = currentScrollPos;
  }
  else{
    document.querySelector(".section_navbar").classList = "section_navbar"
  }
}
/* END MENU CONTROL */

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

/* BENEFIT */

window.addEventListener("scroll", function(){
    if(Math.ceil(window.scrollY) >= 700){
        document.querySelector('.scane').classList = 'show_scane scane'
    }
    else{
        document.querySelector('.scane').classList = 'scane'
    }
    let benefit_img = document.querySelectorAll(".benefit_image2");
    benefit_img.forEach(function(e){

    if(e.getBoundingClientRect().top <= window.innerHeight - 300){
        e.classList = "benefit_image2 for_benefit"
    }else{
        e.className = "benefit_image2"
    }

    
})


let benefit_text = document.querySelectorAll(".benefit_text");
    benefit_text.forEach(function(z){

    if(z.getBoundingClientRect().top <= window.innerHeight - 200){
        
    z.classList = "benefit_text for_benefit"
       
    }else{
        z.className = "benefit_text"
    }

    
})

    let ceo = document.querySelector(".ceo");

    if(ceo.getBoundingClientRect().top <= window.innerHeight - 250){
        
    ceo.classList = "ceo for_benefit"

    ceo.querySelector('a').querySelector('img').src = "staticfiles/img/main/CEO2.png"
       
    }else{
        ceo.className = "ceo"
         ceo.querySelector('a').querySelector('img').src = "staticfiles/img/main/CEO.png"
    }

    let benefit_image1 = document.querySelectorAll(".benefit_image1");
    benefit_image1.forEach(function(p){

    if(p.getBoundingClientRect().top <= window.innerHeight - 300){
        
    p.classList = "benefit_image1 for_benefit_img_filter"
    
    }else{
        p.className = "benefit_image1"
    }

    let team = document.querySelector(".team_images");

    if(team.getBoundingClientRect().top <= window.innerHeight - 200){
        team.classList = "team_images for_benefit"
    }
    else{
        team.classList = "team_images"
    }

     let team_dot = document.querySelector(".team_dots");

    if(team_dot.getBoundingClientRect().top <= window.innerHeight - 100){
        team_dot.style = "filter:blur(0px);"
    }
    else{
        team_dot.style = "filter:blur(5px);"
    }

     let team_text = document.querySelector(".team_text");

    if(team_text.getBoundingClientRect().top <= window.innerHeight - 50){
        team_text.classList = "team_text for_benefit"
    }
    else{
        team_text.classList = "team_text"
    }

    
})

})

/* ENDBENEFIT */

/* TEAM SWIPPER */

 var team_swiper = new Swiper(".team_swiper", {
        slidesPerView:1.5,
        spaceBetween: 30,
        grabCursor:true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

/* END TEAM SWIPPER */
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

window.addEventListener('scroll', function() {
    let course = document.querySelectorAll(".course_container")
    let res = (window.innerHeight -  course[0].clientHeight) / 2
    let position = course[0].getBoundingClientRect()
    if(position.top <= window.innerHeight - (res + course[0].clientHeight + 100)){
        course[1].style = `position: relative; margin-top:-${course[0].clientHeight - 40}px; transition: all 0.5s; z-index: 10;`
    }
    else{
        course[1].style = `position: relative;  transition:all 0.5s; z-index: 10;`
    }

    if(course[1].getBoundingClientRect().top <= window.innerHeight - (res + course[1].clientHeight + 100)){
        course[2].style = `position: relative; margin-top:-${course[1].clientHeight - 40}px; transition: all 0.5s; z-index: 10;`
    }
    else{
        course[2].style = `position: relative;  transition:all 0.5s; z-index: 10;`
    }

    if(course[2].getBoundingClientRect().top <= window.innerHeight - (res + course[2].clientHeight + 100)){
        course[3].style = `position: relative; margin-top:-${course[2].clientHeight - 40}px; transition: all 0.5s; z-index: 10;`
    }
    else{
        course[3].style = `position: relative;  transition:all 0.5s; z-index: 10;`
    }

    if(course[3].getBoundingClientRect().top <= window.innerHeight - (res + course[3].clientHeight + 100)){
        course[4].style = `position: relative; margin-top:-${course[3].clientHeight - 40}px; transition: all 0.5s; z-index: 10;`
    }
    else{
        course[4].style = `position: relative;  transition:all 0.5s; z-index: 10;`
    }

    if(course[4].getBoundingClientRect().top <= window.innerHeight - (res + course[4].clientHeight + 100)){
        course[5].style = `position: relative; margin-top:-${course[4].clientHeight - 40}px; transition: all 0.5s; z-index: 10;`
    }
    else{
        course[5].style = `position: relative;  transition:all 0.5s; z-index: 10;`
    }
    
    
});

/* ENS COURSES ANIMATE*/

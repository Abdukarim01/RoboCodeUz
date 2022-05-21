/* start navbar functions */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if(Math.ceil(window.scrollY) >= 500){
    if (prevScrollpos > currentScrollPos) {
    document.querySelector(".section_navbar").classList = "section_navbar for_navbar_section2"
  } else {
     document.querySelector(".section_navbar").classList = "section_navbar for_navbar_section1"
  }
  prevScrollpos = currentScrollPos;
  }
  else{
    document.querySelector(".section_navbar").classList = "section_navbar"
  }
}
let navnum = 0;
function navbarControlr(){
   navnum++
   function media1(x) {
      let line = q(".line");
      var navbar = q('.navbar_right');
      if (x.matches) { 
            if(navnum >= 2){navnum = 0}
            if (navnum == 0) {
                  navbar.style.height = 0;
                  line.forEach( function(e){
                    e.style = ""
                  })
            }if(navnum == 1){
                  var wrapper = navbar.querySelector("ul")
                  navbar.style.height = wrapper.clientHeight + "px";
                  line.forEach( function(e){
                    e.style = "top:42.5%;"
                  })
          }
      } else {
          navnum = 0
          navbar.style.height = "";
      }
  }
  var x = window.matchMedia("(max-width: 1100px)")
  media1(x) 
  x.addListener(media1)
}
/* end navbar functions */


/* start swipers */
let course_swiper = new Swiper(".course_swiper",{
  loop:true
})
let delay = q(".typer").getAttribute("data-delay")
let delay_delete =  q(".typer").getAttribute("data-deleteDelay")
let words = q(".course_typer").querySelector(".typer").getAttribute("data-words").split(",").filter((v) => v)
course_swiper.on('slideChangeTransitionEnd', function() {
  let index_slide = course_swiper.realIndex;
  let typer = q(".course_typer");
  let arr = []
  for(let i = 0; i<words.length; i++){
    if(i !== index_slide){
      arr.push(words[i])
    }
  }
  arr.unshift(words[index_slide])
   typer.innerHTML = `
    <span 
         class="typer" id="main"
         data-words="${arr}"
         data-delay="${delay}" data-deleteDelay="${delay_delete}">
    </span>  
    <span class="cursor" data-owner="main" data-cursorDisplay="|"></span>
   `
   TyperSetup();
});

let typerSlideNum = -1;
function typerSlide(){
  typerSlideNum ++
  let content = words[typerSlideNum]
  let wait = (q(".typer").getAttribute("data-delay") * 2) * (content.length + 1) + Number(q(".typer").getAttribute("data-deleteDelay"))
  setTimeout(function(){
    if(typerSlideNum < words.length-1){
        console.log(content,wait)
        course_swiper.slideTo(typerSlideNum+2)
        typerSlide()
    }
  },wait)
  
  if(typerSlideNum >= words.length-1) typerSlideNum = -1
}
typerSlide()
/* end swipers*/
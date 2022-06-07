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
        course_swiper.slideTo(typerSlideNum+2)
        typerSlide()
    }
  },wait)
  
  if(typerSlideNum >= words.length-1) typerSlideNum = -1
}
typerSlide()
/* end swipers*/
/* start main course animations */
let course_blocks = q(".course_blocks");
function media2(y) {
    if (y.matches){ 
           course_blocks.forEach((e,index)=>{
              e.style = `
                    position: sticky;
                    top:${15 * (index+1)}px;
              `
           })
        } else {
          course_blocks.forEach((e,index)=>{
            e.style = `
                  position: sticky;
                  top:${25 * (index+1)}px;
            `
          })
    }
}
var y = window.matchMedia("(max-width:1100px)")
media2(y) 
y.addListener(media2)
//
window.addEventListener("scroll", function(){
  course_blocks.forEach(function(e,index){
    let courseTop = Math.ceil(e.getBoundingClientRect().top);
    if(courseTop <= (window.innerHeight - e.getBoundingClientRect().height + 50) / 2){
      e.classList.add('for_course_blocks');
      e.querySelector("img").style = "filter:grayscale(0%);"
    }
    else{
      e.className = 'course_blocks';
       e.querySelector("img").style = "filter:grayscale(100%);"
    }
  })
  let defferences_img = q(".difference_img");
  defferences_img.forEach(function(e){
    let e_height = e.getBoundingClientRect().height;
    let e_top = Math.ceil(e.getBoundingClientRect().top)
    if(e_top <= window.innerHeight - ( e_height / 2)){
      e.querySelector(".dots").classList.add("for_defference_img_dots")
      e.querySelector(".phone").classList.add("for_defference_img_phone")
    }
    else{
      e.querySelector(".dots").className = "dots"
      e.querySelector(".phone").className = "phone"
    }
  })
  let defferences_text = q(".difference_text")
  defferences_text.forEach(function(e){
    let e_height = e.getBoundingClientRect().height;
    let e_top = Math.ceil(e.getBoundingClientRect().top)
    if(e_top <= window.innerHeight - ( e_height / 1.5)){
      e.classList.add("for_difference_text")
      e.classList.add("for_difference_text")
    }
    else{
      e.className = "difference_text"
      e.className = "difference_text"
    }
  })
})
/* end main course animations */

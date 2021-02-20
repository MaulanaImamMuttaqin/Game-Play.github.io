let nav_button = document.querySelectorAll("nav a"),
    bar_button = document.querySelector(".nav-button"),
    nav_bar = document.querySelector("nav")

let slider_wrapper = document.querySelector(".wrapper"),
    prev = document.querySelector("#left"),
    next = document.querySelector("#right"),
    slideWidth = document.querySelector(".slider").getBoundingClientRect().width,
    slidePosition = 0

prev.addEventListener("click",()=> {shiftSlide(-1)})
next.addEventListener("click",()=> {shiftSlide(1)})

nav_button.forEach(nav=> {
    nav.addEventListener("click", ()=>{
        changeHighlight(nav)
    })
})

bar_button.addEventListener('click', ()=>{toggleNavBar()})

function changeHighlight(nav){
    nav_button.forEach(x=>{
        if(x.innerText !== nav.innerText){
            x.classList.remove("highlight")
            return;
        }
    })
    nav.classList.add("highlight")
}

function shiftSlide(dir){
    if(dir > 0 ){
        slidePosition = slidePosition + slideWidth
        if(slidePosition === slideWidth*3){
            slidePosition = 0
        }
        console.log(slidePosition)
    }
    else{
        slidePosition = slidePosition - slideWidth
        if(slidePosition < 0 ){
            slidePosition = slideWidth*(2)
        }
    }
    slider_wrapper.style.right = slidePosition +"px"
}

function toggleNavBar(){
    nav_bar.classList.toggle("close");
    nav_bar.classList.toggle("open");
}
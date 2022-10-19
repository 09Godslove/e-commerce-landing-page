const slides = document.getElementsByClassName('mySlides')
const dots = document.getElementsByClassName('demo')
const slides2 = document.getElementsByClassName('myslides2')
const lightBox = document.querySelector(".slides2")
const dots2 = document.getElementsByClassName('demo2')
const background = document.querySelector(".main")
const numberEl = document.querySelector(".number")
const cartEl = document.querySelector(".cart2")
const multipleEl = document.querySelector(".multiple")
const totalEl = document.querySelector(".total-price")
const fullEl = document.querySelector(".filled")
const checkoutEl = document.querySelector(".checkout")
const emptyEl = document.querySelector(".empty")
const noEl = document.querySelector(".cart-no")
const linksEl = document.querySelector(".links")
let slideIndex = 1
let number = 0
let total = 0
function cancel2(){
    linksEl.style.display = "none"
}
function showLinks(){
    linksEl.style.display = "block"
}

function addToCart (){
    if (number === 0){
        emptyEl.style.display = "block"
        fullEl.style.display = "none"
        checkoutEl.style.display = "none"
        noEl.style.display = "none"
    }
    else {
        noEl.style.display = "block"
        fullEl.style.display = "flex"
        emptyEl.style.display = "none"
        checkoutEl.style.display = "block"
        total = number * 125
        multipleEl.innerHTML = "$125.00 x " + number
        totalEl.innerHTML = "$" + total.toFixed(2)
        noEl.innerHTML = number
    }
}
function showCart(){
    cartEl.setAttribute("style", "display: block")
}
function hideCart(){
    cartEl.setAttribute("style", "display: none")
}
showslides(slideIndex)
showslides2(slideIndex)

function plusSlides(n) {
    showslides(slideIndex += n)
}
function plusSlides2(n) {
    showslides2(slideIndex += n)
}
function currentSlide(n){
    showslides(slideIndex = n)
}
function currentSlide2(n){
    showslides2(slideIndex = n)
}
function showslides(n) {
    let i;
    if (n > slides.length){
        slideIndex = 1
    }
    else if ( n < 1){slideIndex = slides.length}
    for ( i = 0; i< slides.length; i++){
        slides[i].style.display = "none"
    }
    for(i=0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '')
    }
    slides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].className += " active"
}
function showslides2(n) {
    let i;
    if (n > slides2.length){
        slideIndex = 1
    }
    else if ( n < 1){slideIndex = slides2.length}
    for ( i = 0; i< slides2.length; i++){
        slides2[i].style.display = "none"
    }
    for(i=0; i< dots2.length; i++){
        dots2[i].className = dots2[i].className.replace('active2', '')
    }
    slides2[slideIndex-1].style.display ="block";
    dots2[slideIndex-1].className += " active2"
}
function lightbox(){
    background.setAttribute("style", "filter: brightness(10%)")
    lightBox.setAttribute("style","display: block" )
}
function cancel(){
    location.reload()
}
function plus(){
    number = number + 1
    numberEl.innerHTML= number
}
function minus(){
    number = number - 1
    if(number=== -1){
        number = 0
        numberEl.innerHTML = number
    }
    else{
        numberEl.innerHTML= number
    }
}

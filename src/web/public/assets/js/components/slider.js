let slider = document.querySelector('.slider__list')
let items = document.querySelectorAll('.slider__item')
let dots = document.querySelectorAll('.slider__dots li')

let lengthItems = items.length - 1
let active = 0
function next(){
    active = active + 1 <= lengthItems ? active + 1 : 0
    reloadSlider()
}
let refreshInterval = setInterval(()=> {next()}, 5000)
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px' 
    let lastActiveDot = document.querySelector('.slider__dots li.active')
    lastActiveDot.classList.remove('active')
    dots[active].classList.add('active')

    clearInterval(refreshInterval)
    refreshInterval = setInterval(()=> {next()}, 5000)
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key
         reloadSlider()
    })
})
window.onresize = function(event) {
    reloadSlider()
}
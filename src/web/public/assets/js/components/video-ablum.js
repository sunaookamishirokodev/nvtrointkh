const list = document.getElementById('va__list')
const vaItems = document.querySelectorAll('.va__item')

let lengthVaItems = vaItems.length - 1
let vaActive = 0
function vaNext(){
    vaActive = vaActive + 1 <= lengthVaItems ? vaActive + 1 : 0
    reloadlist()
}
let vaRefreshInterval = setInterval(()=> {vaNext()}, 5000)
function reloadlist(){
    list.style.left = -vaItems[vaActive].offsetLeft + 'px' 

    clearInterval(vaRefreshInterval)
    vaRefreshInterval = setInterval(()=> {vaNext()}, 5000)
}
window.onresize = function(event) {
    reloadlist()
}
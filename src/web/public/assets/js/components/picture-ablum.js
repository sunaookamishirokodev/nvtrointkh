const list = document.getElementById('pa__list')
const paItems = document.querySelectorAll('.pa__item')

let lengthPaItems = paItems.length - 1
let paActive = 0
function paNext(){
    paActive = paActive + 1 <= lengthPaItems ? paActive + 1 : 0
    reloadlist()
}
let paRefreshInterval = setInterval(()=> {paNext()}, 5000)
function reloadlist(){
    list.style.left = -paItems[paActive].offsetLeft + 'px' 

    clearInterval(paRefreshInterval)
    paRefreshInterval = setInterval(()=> {paNext()}, 5000)
}
window.onresize = function(event) {
    reloadlist()
}
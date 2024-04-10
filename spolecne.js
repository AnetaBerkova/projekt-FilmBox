// 3


const menuTlacitko = document.querySelector('#menu-tlacitko')
const menuPolozky = document.querySelector('#menu-polozky')
const ikonaTlacitka = menuTlacitko.querySelector('i')

menuTlacitko.addEventListener('click', function () {
menuPolozky.classList.toggle('show')
        
if (menuPolozky.classList.contains('show')) {
    ikonaTlacitka.classList.remove('fa-bars')
    ikonaTlacitka.classList.add('fa-xmark')} 
    else {
    ikonaTlacitka.classList.remove('fa-xmark')
    ikonaTlacitka.classList.add('fa-bars')}
    })

// 3

document.addEventListener('DOMContentLoaded', function () {
    const menuTlacitko = document.querySelector('#menu-tlacitko');
    const menuPolozky = document.querySelector('#menu-polozky');

    menuTlacitko.addEventListener('click', function () {
        menuPolozky.classList.toggle('show');
    });
});

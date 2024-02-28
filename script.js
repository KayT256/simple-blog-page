var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

window.onscroll = function() {
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
};

var click = 0;
document.getElementById('heart').addEventListener('click', function() {
    click++
    if (click % 2 == 1) {
        document.getElementById('heart').style.fill = '#cb06fd'
    } else {
        document.getElementById('heart').style.fill = '#fff'
    }
})
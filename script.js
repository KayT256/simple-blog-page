var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

window.onscroll = function() {
    if (window.scrollY >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
};

var liked = false;
var heart = document.getElementById('heart')
var heartSVG = document.getElementById('heart-svg')
heart.addEventListener('mousedown', function() {
    liked = !liked;
    if (liked) {
        heart.style.fill = '#cb06fd'
        heartSVG.setAttribute('class', 'heart-animation-liked')
    } else {
        heart.style.fill = '#fff'
        heartSVG.setAttribute('class', 'heart-animation-unliked')
    }
})
window.addEventListener('scroll', function() {
    var nav = document.getElementsByTagName('nav')[0];
    let windowPosition = window.scrollY > 200

    nav.classList.toggle('scrolling-active', windowPosition);
})
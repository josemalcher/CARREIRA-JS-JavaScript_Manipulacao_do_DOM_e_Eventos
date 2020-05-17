function changeScroll(event) {
    var doc = document.documentElement;
    var top = window.pageYOffset || doc.scrollTo;
    var header = document.getElementById('header');

    if (top >= 200) {
        header.classList.add('top');
    } else {
        header.classList.remove('top');
    }



}

addEventListener('scroll', changeScroll);
document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {

    });

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);

    //Touchable Carousel:
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration: 200
    });
    window.addEventListener('load', () => {
            document.getElementById('circulo').className = 'hide';
            document.getElementById('practicamente-todo').className = '';
        })
        //SIDENAV
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    //pushpin o barra
    /*
        var elems = document.querySelectorAll('.pushpin-nav');
        var instances = M.Pushpin.init(elems, {
            top: $(window).height() //+ $(window).height() * 0.10
        });
        var instance = M.Pushpin.getInstance(elem);*/

}); //DOMContentLoaded
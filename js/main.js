$(document).ready(function() {
    //TYPE EFFECT CODE
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    $(window).scroll(function() {
        //QUE SE QUEDE FIJA LA BARRA (PUSHPIN)
        var scroll = $(window).scrollTop();
        var alturaPantalla = $(window).height();
        var anchoPantalla = $(window).width();
        var alturaBarra = $('.pushpin-nav').innerHeight();
        let contador = 0;
        if (anchoPantalla < 450 && contador < 1) {
            contador++;
            alturaPantalla = alturaPantalla + 57;
        }
        if (scroll > alturaPantalla) {
            $('.pushpin-nav').addClass('fixed');
            $('body').css({ 'margin-top': alturaBarra + 'px' });
            $('.pushpin-nav').removeClass('transparente');
        } else {
            $('body').css({ 'margin-top': '0px' });
            $('.pushpin-nav').removeClass('fixed');
            $('.pushpin-nav').addClass('transparente');
        }
    });
    //Efectos del header
    if ($(window).width() > 800) {
        $('header .menu a').each(function(index, elemento) {
            $(this).css({
                top: '-200px'
            });
            $(this).animate({
                top: '0'
            }, 2000 + (index * 500));
        });
        $('#apellido').animate({
            top: '40px'
        }, 1500);
        $('#apellido').animate({
            top: '0px'
        }, 1500);
        descripcion.animate({
            top: '40px'
        }, 1500);
        descripcion.animate({
            top: '0px'
        }, 2000);
    } else {
        $('#apellido').animate({
            top: '0px'
        }, 2000);
        $('header .menu a').each(function(index, elemento) {
            $(this).css({
                top: '-200px'
            });
            $(this).animate({
                top: '0'
            }, 1000 + (index * 500));
        });
        // descripcion.animate({
        //     top: '20px'
        // }, 1000);
        // descripcion.animate({
        //     top: '0px'
        // }, 1000);
    } //else
    //Click a los link acerca-de, contacto, redes-sociales (Para que te lleven a esa sección).
    // if ($('#acerca-de')) {
    //     let acercaDe = $('#acerca-de').offset().top,
    //         trabajos = $('#trabajos').offset().top,
    //         contacto = $('#contacto').offset().top,
    //         web = $('#web').offset().top,
    //         desktop = $('#desktop').offset().top;
    // }
    //android = $('#android').offset().top,
    //top del scroll de la pantalla de cada sección
    $('#btn-acerca-de').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#acerca-de').offset().top
        }, 500);
    });
    if ($(window).width() > 800) {
        $('#btn-trabajos').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#trabajos').offset().top + 55
            }, 500);
        });
    } else {
        $('#btn-trabajos').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#trabajos').offset().top

            }, 500);
        });
    }
    $('#btn-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#contacto').offset().top
        }, 500);
    });
    $('#btn-web').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#web').offset().top
        }, 500);
    });
    /*$('#btn-android').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: android
        }, 500);
    });*/
    $('#btn-desktop').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#desktop').offset().top
        }, 500);
    });

    //Para que mi imagen se acomode en la sección de acerca de:
    /*if ($(window).width() > 800) {
        var alturaImagen = $('.subtitulo-acerca-de').offset().top.toFixed(2);
        $('.yo-acerca-de img').css({
            top: '-' + alturaImagen + 'px !important'
        });*/
}); //ready
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
    //Cuando cargue la Pag Web entonces:
    window.addEventListener('load', () => {
            //Esconder el Loader del circulo
            document.getElementById('circulo').className = 'hide';
            document.getElementById('practicamente-todo').className = '';
            document.getElementById('barra').className = 'borde-de-la-barra pushpin-nav z-index';
            document.getElementById('contacto').className = 'contacto';
            document.getElementById('redes-sociales').className = 'redes-sociales';
        })
        //SIDENAV
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);

}); //DOMContentLoaded


//Tiempo Actual
var tiempo = new Date();

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', ' Diciembre'
];
var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

var mesActual = tiempo.getMonth(); //Retorna el número del mes 0 = enero.
var diaActual = tiempo.getDay(); //Dia de la semana
var dia = tiempo.getDate();
// el acento grave o ( ` ) se pone con alt + 96 ``
document.querySelector('#fecha').innerHTML = `<p class="fecha mayuscula" id="fecha"><i class="naranja icono fa fa-calendar"></i> ${[dia]} de ${meses[mesActual]}</p>`;
document.querySelector('#ciudad').innerHTML = `<p class="ciudad" id="ciudad"><i class="naranja icono  fa fa-map-marker"></i> ZULIA, VEN.</p>`;
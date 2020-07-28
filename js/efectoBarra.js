var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('bubble'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    lights = new Array,
    colors = ['#d59254', '#ffffff', '#1f2839', '#cf7693'];

canvas.setAttribute('width', w);
canvas.setAttribute('height', h);

function init() {
    time = 0;
    count = 0;

    for (var i = 0; i < arc; i++) {
        lights[i] = {
            x: Math.ceil(Math.random() * w),
            y: Math.ceil(Math.random() * h),
            toX: Math.random() * 5 + 1,
            toY: Math.random() * 5 + 1,
            c: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * size
        }
    }
}

function bubble() {
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < arc; i++) {
        var li = lights[i];

        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) { li.x = 0; }
        if (li.y > h) { li.y = 0; }
        if (li.x < 0) { li.x = w; }
        if (li.y < 0) { li.y = h; }
    }
    if (time < speed) {
        time++;
    }
    timerID = setTimeout(bubble, 1000 / rate);
}
init();
bubble();

//navigation (this is my code)
var animation = 'easeOutCubic';
delay = 60;

$(document)
    .on('click', '.fa-bars', function() {
        abrirBurbujas();
    }) //Para cerrar el fondo de las burbujas:
    .on('click', '#bubble, .sidenav-overlay, .iconoDeCerrar', function() {
        cerrarBurbujas();
    });

function abrirBurbujas() {
    var i = 0;
    $('nav').before($('#bubble'));
    $('#bubble').fadeIn();
    $('#mainnav').find('li').each(function() {

        var that = $(this);
        i++;
        (function(i, that) {
            setTimeout(function() {
                that
                    .animate({ 'left': '20px' }, {
                        duration: 350,
                        easing: animation
                    })
                    .fadeIn({ queue: false });
            }, delay * i)
        }(i, that))
    });
    $('.fa-bars').fadeOut(100, function() {
        $(this)
            .fadeIn();
    });
}

let menuSide = document.getElementById('menu-side');
//Los eventos Swipe no existen en JS, se debe utilizar la libreria swiped-events.js para tener
//acceso al evento swiped-left.
menuSide.addEventListener('swiped-left', cerrarBurbujas);

function cerrarBurbujas() {
    $('#bubble').fadeOut();
    $('#mainnav').find('li')
        .animate({ 'left': '-550px' }, { duration: 250 })
        .fadeOut({ queue: false });

    $('.hamb').fadeOut(100, function() {
        $(this)
            .find($('i'))
            .end()
            .fadeIn();
    });
}
menuSide.addEventListener('touchmove', evaluarSiSeHaCerradoElSideNavMucho);

function evaluarSiSeHaCerradoElSideNavMucho() {
    //El menu-side al tener un transform: transform: translateX(-300px); quitar efecto de las burbujas
    let menuSide = document.getElementById('menu-side');
    let menuSideStyle = window.getComputedStyle(menuSide);
    let menuTransform = menuSideStyle.getPropertyValue('transform');
    //Nos retornaria un monton de letras, eso hay que quitarselo porque nos interesa el numero
    //sso lo hacemos con substring y ahi le pasas de donde hasta donde.
    menuTransform = menuTransform.substring(18, 23);
    menuTransform = parseFloat(menuTransform);
    if (menuTransform < -201) {
        cerrarBurbujas();
    } else {
        abrirBurbujas();
    }
}
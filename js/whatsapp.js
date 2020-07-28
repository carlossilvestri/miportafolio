document.querySelector('#send_message').addEventListener('click', function(e) {
    e.preventDefault();
    var number = '584149616206';

    var url = "https://wa.me/" + encodeURIComponent(number);
    console.log(url);

    window.open(url);

});
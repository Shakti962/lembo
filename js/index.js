// Setting random image on main-img
var carName = document.getElementById('main-car').getAttribute('src');
var randomNo = Math.round(Math.random()*1)+1;
document.getElementById('main-car').setAttribute('src', 'images/car' + randomNo + '.png');
var carName2 = document.getElementById('main-car').getAttribute('src');

//
    if (screen.width >= 992) {
        if (carName2 === 'images/car2.png'){
        $('.active').css('background-color', '#ef7d25').css('color', '#1a1e21');
        $('.navbar-link').hover(function () {
            $(this).css("background-color", "#ef7d25").css("color", "#1a1e21");
        }, function () {
            $(this).css("background-color", "#1a1e21").css("color", "#fff");
        });
        $('.sports').css('color', '#ef7d25');
        $('.main-btn1').css('background-color', '#ef7d25');
        $('.divider h3').css('color', '#ef7d25');
        $('.product').css('border-color', '#ef7d25');
        $('.car-img').css('margin-top', '-50px');
    }
}
    function addPadding(id){
        var element = document.getElementById(id);
        var style = window.getComputedStyle(element);
        var padding = style.paddingTop;
        document.getElementById(id).style.paddingTop = "62px";
    }
    function openNav() {
        document.getElementById("sideNav").style.width = "100%";
    }

    function closeNav() {
        if (screen.width <= 991) {
            document.getElementById("sideNav").style.width = "0";
        }
    }
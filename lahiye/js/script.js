$(document).ready(function() {
    $(window).scroll(function(ev) {
        if ($(this).scrollTop() > 80) {
            $('#header').addClass("scrolled");
        } else {
            $('#header').removeClass("scrolled");
        }


    });

   


})
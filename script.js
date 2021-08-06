function navchange(evt, navname) {
    var i, tablinks;
    tabcontent = document.getElementsByClassName("nav-link");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }
    document.getElementById(navname).className += " active";
    // evt.currentTarget.className += " active";
}

$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 400) {
            $(".navbar").css("background", "white");
        } else {
            $(".navbar").css("background", "rgba(0,0,0,0)");
        }
    });
});
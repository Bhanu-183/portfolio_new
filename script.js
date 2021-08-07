function sidenav(evt, navname) {
    var i, tablinks;
    tabcontent = document.getElementsByClassName("side-link");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" activated", "");
    }
    document.getElementById(navname).className += " activated";
}

$(document).ready(function () {
    $(window).scroll(function () {
        // alert("Helo");
        var scroll = $(window).scrollTop();
        if (scroll > 200) {

            $(".navbar").css("background", "white");
        } else {
            $(".navbar").css("background", "rgba(0,0,0,0)");
        }
    });
});



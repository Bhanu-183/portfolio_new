
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {

            $(".navbar").css("background", "white");
        } else {
            $(".navbar").css("background", "rgba(0,0,0,0)");
        }
    });
});


function sidenavclick(evt, navname, blockname) {

    var i, tablinks;
    tabcontent = document.getElementsByClassName("side-link");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" activated", "");
    }
    document.getElementById(navname).className += " activated";
    content = document.getElementsByClassName("resume-blocks");

    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }

    document.getElementById(blockname).style.display = "block";

}
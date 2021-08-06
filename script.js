function navchange(evt, navname) {
    var i, tablinks;
    tabcontent = document.getElementsByClassName("nav-link");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].className = tabcontent[i].className.replace(" active", "");
    }

    document.getElementById(navname).className += " active";
    // evt.currentTarget.className += " active";
}
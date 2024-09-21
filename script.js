
var showNavbarMod2 = 0;

function showNavbar() {
    var btnNavbar = document.getElementById('navbar-container');

    if (showNavbarMod2 % 2 == 0) {
        btnNavbar.style.transform = "translate(-20px)";
    } else {
        btnNavbar.style.transform = "translate(-300px)";
    }

    showNavbarMod2++;
}
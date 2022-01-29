// AOS

AOS.init();

// LOADER

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("load").style.transform = "translateY(-200vh)";
}

// NAV

jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $(".navbar").css("background-color", "var(--bg-color)");
        $(".navbar a").css("color", "#FBFBFD");
    } else {
        $(".navbar").css("background", "none");
        $(".navbar a").css("color", "#FBFBFD");
    }
});

// SIDENAV 
function openNav(){
    document.getElementById("sidenav").style.width="100%";
}
function closeNav () {
    document.getElementById("sidenav").style.width="0";
}
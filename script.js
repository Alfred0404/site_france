const navbar = document.getElementById("nav");


window.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
        navbar.style.backgroundColor = "rgba(205, 205, 205, 0.4)";
    }
    else {
        navbar.style.backgroundColor = "rgba(205, 205, 205, 0.9)";
    }
});
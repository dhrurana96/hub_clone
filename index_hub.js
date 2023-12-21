function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}


// on mouse hover effect in this lern more content coome out 
function showLearnMore(element) {
    var learnMore = element.querySelector(".div-lernmore");
    learnMore.style.opacity = 1;
    learnMore.style.transform = "translate(0px, -25px)";
}

function hideLearnMore(element) {
    var learnMore = element.querySelector(".div-lernmore");
    learnMore.style.opacity = 0;
    learnMore.style.transform = "translate(0px, 50px)";
}


function showArrow() {
    var arrow = document.getElementById("arrow");
    arrow.style.display = "block";
}

function hideArrow() {
    var arrow = document.getElementById("arrow");
    arrow.style.display = "none";
}

// auto scroller 
function autoScroll() {
    const container = document.getElementById('image-container');
    container.style.animation = 'scroll 20s linear infinite';
}

// Call the auto-scroll function after the DOM is loaded
window.onload = function () {
    autoScroll();
};

let header = document.querySelector(".main-header");
var sticky = header.offsetTop;

window.onscroll = function() { myFunction() };

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


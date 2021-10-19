let prevPos = window.pageYOffset;

window.onscroll = function () {
    let currentPos = window.pageYOffset;
    if (prevPos > currentPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-15vw";
    }

    prevPos = currentPos;

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    }
    else {
        document.getElementById("navbar").style.backgroundColor = "transparent"
    }
}

function fadeInNavbar() {
    setTimeout(() => {
        document.getElementById("navbar").style.opacity = "1";
    }, 2500);
}

function changeFeatures(x) {
    if (x.matches) {
        document.getElementById("navbar").innerHTML = "<div onclick='openSidebar()' id='hamburger-icon'><div class=\"hg\"></div><div class=\"hg\"></div><div class=\"hg\"></div></div>"
    }
    else {
        document.getElementById("navbar").innerHTML = "<ul><li><a href=\"#home\">HOME</a></li><li><a href=\"#about\">ABOUT</a></li><li><a href=\"#skills\">SKILLS</a></li><li><a href=\"#projects\">PROJECTS</a></li><li><a href=\"#contact\">CONTACT</a></li></ul>";
    }
}

let x = window.matchMedia("(max-width: 480px) and (orientation:portrait)");
changeFeatures(x);
x.addListener(changeFeatures);

function openSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.width = "100%";
    sidebar.style.opacity = "1"

    setTimeout(() => {
        $('#sidebar a').css("opacity", "1");
        $('#sidebar div').css("opacity", "1");
    }, 700);
}

function closeSidebar() {
    let sidebar = document.getElementById("sidebar");
    $('#sidebar div').css("opacity", "0");
    $('#sidebar a').css("opacity", "0");

    setTimeout(() => {
        sidebar.style.width = "0";
        sidebar.style.opacity = "0"
    }, 700);
}

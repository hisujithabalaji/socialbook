var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function() {
    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
    // ?:
    darkBtn.classList.toggle("js-dark-btn-on");
    document.body.classList.toggle("js-dark-theme");
}

if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("js-dark-btn-on");
    document.body.classList.remove("js-dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("js-dark-btn-on");
    document.body.classList.add("js-dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}
// localStorage.setItem("theme", "dark");
// localStorage.getItem("theme");
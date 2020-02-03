const button = document.getElementsByClassName('navButton')
const menu = document.getElementById('menu')
const links = document.getElementsByTagName("a")

// use the button in the corner to open and close the menu
for (i=0; i<button.length; i++) {
    button[i].addEventListener("click", function() {
        if (menu.style.display === "block") {
            menu.style.display = "none"
        } else {
            menu.style.display = "block"
        }
    })
}

// if you click on the menu it also closes, in case the user fat fingers the button
menu.addEventListener("click", function() {
    if (menu.style.display === "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
})

// but if they click on a link it opens back up, in case they went to the wrong page
for (i=0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        if (menu.style.display === "block") {
            menu.style.display = "none"
        } else {
            menu.style.display = "block"
        }
    })
}
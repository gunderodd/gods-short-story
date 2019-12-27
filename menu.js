const button = document.getElementsByClassName('navButton')
const menu = document.getElementById('menu')

for (i=0; i<button.length; i++) {
    button[i].addEventListener("click", function() {
        if (menu.style.display === "block") {
            menu.style.display = "none"
        } else {
            menu.style.display = "block"
        }
    })
}
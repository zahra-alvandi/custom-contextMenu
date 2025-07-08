const contextmenu = document.querySelector(".contextmenu");

function showContextMenu(event) {
    event.preventDefault();
    console.log(contextmenu.style.display);

    if (contextmenu.style.display === "none") {
        contextmenu.style.display = "block";
        contextmenu.style.left = 0;
    }
}

document.addEventListener("contextmenu", showContextMenu);
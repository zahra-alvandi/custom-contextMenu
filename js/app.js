const contextmenu = document.querySelector(".contextmenu");

function showContextMenu(event) {
    event.preventDefault();
    console.log(contextmenu.style.display);

    if (contextmenu.style.display === "none") {
        contextmenu.style.display = "block";
        contextmenu.style.top = `${event.pageY}px`;
        contextmenu.style.left = `${event.pageX}px`;
    } else {
        contextmenu.style.top = `${event.pageY}px`;
        contextmenu.style.left = `${event.pageX}px`;
    }
}

function hideContextMenu() {
    contextmenu.style.display = "none";
}

function hideContextMenuWithEscape(event) {
    if (event.key === "Escape") {
        contextmenu.style.display = "none";
    }
}

document.addEventListener("contextmenu", showContextMenu);
document.body.addEventListener("click", hideContextMenu);
document.body.addEventListener("keydown", hideContextMenuWithEscape);
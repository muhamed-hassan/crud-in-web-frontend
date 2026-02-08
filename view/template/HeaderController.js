function openSubmenu(element) {

    
    element.nextElementSibling.style.display = "block";
}

function closeSubmenu() {

    // if the navbar contains more than one dropdown menus, then you have to select the opened one and close it
    // check the style of *-menu to see if it set to "block", then you have to invert to "none"
    document.getElementById("dropdown-menu").style.display = "none";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {

    if (event.target.id != "crud-operations-submenu") {

        closeSubmenu();
    }
}
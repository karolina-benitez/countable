function toggleNavBar() {
    var links = document.getElementById("navLinks");
    var icon = document.getElementById("icon");

    if (links.style.display === "block") {
        links.style.display = "none";
        icon.className = "fa fa-bars";
    } else {
        links.style.display = "block";
        icon.className = "fa-solid fa-xmark";
    }
}

function toggleSearch() {
    var searchBar = document.getElementById("searchBar");

    if (searchBar.style.display === "block") {
        searchBar.style.display = "none";
        searchBar.style.margin = "none";
    } else {
        searchBar.style.display = "block";
        searchBar.style.marginTop = "8px";
    }
}
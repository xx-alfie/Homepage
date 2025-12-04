function contactDropdown() {
    document.getElementById("contactDropdownContent").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('contactDropbtn')) {
        var dropdowns = document.getElementsByClassName("contactDropdown-content");
        var length;
        for (length = 0; length < dropdowns.length; length++) {
            var openDropdown = dropdowns[length];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
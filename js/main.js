function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("hideFilterSection") == -1) {
        x.className += " hideFilterSection";
    } else {
        x.className = x.className.replace(" hideFilterSection", "");
    }
}
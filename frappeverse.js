// URL - Open in new tab
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');

    links.forEach(function (link) {
        if (!link.classList.contains("internal")) {
            link.setAttribute("target", "_blank");
        }
    });
});
document.getElementById("toggleSidebar").addEventListener("click", function() {
    var sidebar = document.querySelector(".sidebar");
    var content = document.querySelector(".content");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "50px";
        content.style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
    }
});
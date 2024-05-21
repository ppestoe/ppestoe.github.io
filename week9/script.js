const toggleBtn = document.querySelector("#toggleBtn");
const sideBar = document.querySelector("#side-drawer");

toggleBtn.addEventListener("click", toggleSide);

let isOpened = false;

function toggleSide() {
 if(!isOpened)
    {
        sideBar.style.translate = "200px";
        isOpened = true;
    } else {
        sideBar.style.translate = "0px";
        isOpened = false;
    }
}
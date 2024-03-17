const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const headerNavList = document.getElementById("headerNavList");

function MenuBurger() {
  if (headerNavList.style.display == "flex") {
    headerNavList.style.display = "none";
  } else {
    headerNavList.style.display = "flex";
  }
}

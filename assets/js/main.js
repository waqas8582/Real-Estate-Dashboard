// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Submenu toggle open/close (only one open at a time)
const submenuItems = document.querySelectorAll(".has-submenu > a");

submenuItems.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const parentLi = link.parentElement;

    // Close all other open submenus
    document.querySelectorAll(".has-submenu.open").forEach((openItem) => {
      if (openItem !== parentLi) {
        openItem.classList.remove("open");
      }
    });

    // Toggle current submenu
    parentLi.classList.toggle("open");
  });
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hide"), 800); // smooth fade-out
});

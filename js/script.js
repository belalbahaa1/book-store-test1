// let userBox = document.querySelector(".header .header-2 .user-box");
let userBtn = document.getElementById("user-btn");

// document.querySelector("#user-btn").onclick = () => {
//   userBox.classList.toggle("active");
//   navbar.classList.remove("active");
// };

let navbar = document.querySelector(".header .header-2 .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  userBox.classList.remove("active");
};

userBtn.onclick = () => {
  window.open("user.html");
};
window.onscroll = () => {
  userBox.classList.remove("active");
  navbar.classList.remove("active");

  if (window.scrollY > 60) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

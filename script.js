const box = document.querySelector(".box");
const mainBox = document.querySelector("#main");
const upBox = document.querySelector("#up");
const tie = document.querySelector("#tie");
const msg = document.querySelector("#msg");
const open = document.querySelector(".open");
const cnt = document.querySelector(".cnt");
box.addEventListener("click", function handler() {
  box.removeEventListener("click", handler);
  tie.classList.add("tie")
  setTimeout(function () {
    upBox.classList.add("up")
  }, 1.5 * 1000);
  setTimeout(function () {
    msg.classList.add("msg-1step")
  }, 2.5 * 1000);
  setTimeout(function () {
    open.classList.add("open-anim")
  }, 3.5 * 1000);
  setTimeout(function () {
    cnt.classList.add("cnt-move")
  }, 4 * 1000);
  setTimeout(function () {
    open.classList.add("close-anim")
  }, 4.5 * 1000);
});


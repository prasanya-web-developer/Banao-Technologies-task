let btnEl = document.getElementById("join-group");
let pencil = document.getElementById("pencil");
let closeIconSignUp = document.querySelector(".fa-solid.fa-circle-xmark");
let closeIconSignIn = document.getElementById("sign-in-close-icone");
let signInText = document.getElementById("sign-in");
let createAccountText = document.getElementById("create-account");
let signUpForm = document.getElementById("sign-up-form");
let signInForm = document.getElementById("sign-in-form");
let dekstopJoinBtnEl = document.getElementById("dekstop-join");
let dekstopLeaveBtn = document.getElementById("dekstop-leave-btn");
let dekstopProfileEl = document.getElementById("nav-profile-section");
let dekstopCreateTextEl = document.getElementById("nav-create-free-account-id");

dekstopJoinBtnEl.addEventListener("click", function () {
  dekstopJoinBtnEl.style.display = "none";
  dekstopLeaveBtn.style.display = "block";
  dekstopCreateTextEl.style.display = "none";
  dekstopProfileEl.style.display = "block";
});

function toggleGroup() {
  if (btnEl.textContent === "Join Group") {
    btnEl.textContent = "Leave Group";
    btnEl.style.width = "86px";
  } else {
    btnEl.textContent = "Join Group";
    btnEl.style.width = "76px";
  }
}

btnEl.addEventListener("click", toggleGroup);

pencil.addEventListener("click", function () {
  signUpForm.style.display = "block";
});

signInText.addEventListener("click", function () {
  signInForm.style.display = "block";
});

createAccountText.addEventListener("click", function () {
  signInForm.style.display = "none";
  signUpForm.style.display = "block";
});

closeIconSignUp.addEventListener("click", function () {
  signUpForm.style.display = "none";
});

closeIconSignIn.addEventListener("click", function () {
  signInForm.style.display = "none";
});

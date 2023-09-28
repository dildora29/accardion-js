//using selectors inside the element
// traversing the dom

"use strict";

const openOne = document.querySelector(".box-1-plus");
const closeOne = document.querySelector(".box-1-minus");
const textOne = document.querySelector(".box-1-text");

openOne.addEventListener("click", () => {
  textOne.classList.remove("hidden");
  openOne.classList.add("hidden");
  closeOne.classList.remove("hidden");

  openTwo.classList.remove("hidden");
  textTwo.classList.add("hidden");
  closeTwo.classList.add("hidden");

  openThere.classList.remove("hidden");
  textThere.classList.add("hidden");
  closeThere.classList.add("hidden");
});

closeOne.addEventListener("click", () => {
  openOne.classList.remove("hidden");
  textOne.classList.add("hidden");
  closeOne.classList.add("hidden");
});

//////////////////////////////////////////////////

const openTwo = document.querySelector(".box-2-plus");
const closeTwo = document.querySelector(".box-2-minus");
const textTwo = document.querySelector(".box-2-text");

openTwo.addEventListener("click", () => {
  textTwo.classList.remove("hidden");
  openTwo.classList.add("hidden");
  closeTwo.classList.remove("hidden");

  openOne.classList.remove("hidden");
  textOne.classList.add("hidden");
  closeOne.classList.add("hidden");

  openThere.classList.remove("hidden");
  textThere.classList.add("hidden");
  closeThere.classList.add("hidden");
});

closeTwo.addEventListener("click", () => {
  openTwo.classList.remove("hidden");
  textTwo.classList.add("hidden");
  closeTwo.classList.add("hidden");
});

/////////////////////////////////////////////////

const openThere = document.querySelector(".box-3-plus");
const closeThere = document.querySelector(".box-3-minus");
const textThere = document.querySelector(".box-3-text");

openThere.addEventListener("click", () => {
  textThere.classList.remove("hidden");
  openThere.classList.add("hidden");
  closeThere.classList.remove("hidden");

  openOne.classList.remove("hidden");
  textOne.classList.add("hidden");
  closeOne.classList.add("hidden");

  openTwo.classList.remove("hidden");
  textTwo.classList.add("hidden");
  closeTwo.classList.add("hidden");
});

closeThere.addEventListener("click", () => {
  openThere.classList.remove("hidden");
  textThere.classList.add("hidden");
  closeThere.classList.add("hidden");
});

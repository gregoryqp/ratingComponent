let rat1 = document.querySelector("#rating1");
let rat2 = document.querySelector("#rating2");
let rat3 = document.querySelector("#rating3");
let rat4 = document.querySelector("#rating4");
let rat5 = document.querySelector("#rating5");
let przycisk = document.querySelector("#klikacz");
let selectedRate = document.querySelector(".r");
let ocena;

let selectRating = (number) => {
  document.querySelector("#rating" + number).classList.add("orange");
  ocena = number;
};

let zmianaKoloru1 = () => {
  let activeOrangeColor = document.querySelector(".orange");
  activeOrangeColor.classList.remove("orange");
  selectRating(1);
};

let zmianaKoloru2 = () => {
  let activeOrangeColor = document.querySelector(".orange");
  activeOrangeColor.classList.remove("orange");
  selectRating(2);
};

let zmianaKoloru3 = () => {
  let activeOrangeColor = document.querySelector(".orange");
  activeOrangeColor.classList.remove("orange");
  selectRating(3);
};

let zmianaKoloru4 = () => {
  let activeOrangeColor = document.querySelector(".orange");
  activeOrangeColor.classList.remove("orange");
  selectRating(4);
};

let zmianaKoloru5 = () => {
  let activeOrangeColor = document.querySelector(".orange");
  activeOrangeColor.classList.remove("orange");
  selectRating(5);
};

let submitButton = () => {
  let usuwanieKomponentu = document.querySelector(".component");
  usuwanieKomponentu.remove("component");

  let activateComponent = document.querySelector(".containerWithThanks");
  activateComponent.classList.remove("containerWithThanks");
  activateComponent.classList.add("component");

  selectedRate.innerHTML = ocena;
};

przycisk.addEventListener("click", submitButton);
rat1.addEventListener("click", zmianaKoloru1);
rat2.addEventListener("click", zmianaKoloru2);
rat3.addEventListener("click", zmianaKoloru3);
rat4.addEventListener("click", zmianaKoloru4);
rat5.addEventListener("click", zmianaKoloru5);

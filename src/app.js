/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const icons = ["♦", "♥", "♠", "♣"];
  const numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  document.querySelector(".card").innerHTML = `
  <div id="card">
    <div id="top">${icons[0]}</div>
    <div id="middle">${numbers[0]}</div>
    <div id="bottom">${icons[0]}</div>
  </div>`;

  const render = () => {
    const randomCard = () => {
      const randomIcon = Math.floor(Math.random() * icons.length);
      const randomNumber = Math.floor(Math.random() * numbers.length);
      const icon = icons[randomIcon];
      const number = numbers[randomNumber];

      card.innerHTML = `<div class="card">
    <div id="top">${icon}</div>
    <div id="middle">${number}</div>
    <div id="bottom">${icon}</div>
    </div>`;

      if (icon === "♦" || icon === "♥") {
        card.innerHTML = `<div class="red">
      <div id="top">${icon}</div>
      <div id="middle">${number}</div>
      <div id="bottom">${icon}</div>`;
      } else {
        card.innerHTML = `<div class="black">
      <div id="top">${icon}</div>
      <div id="middle">${number}</div>
      <div id="bottom">${icon}</div>`;
      }
    };
    randomCard();
  };
  render();
  const button = document.querySelector("button");
  button.addEventListener("click", render);
};

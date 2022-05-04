function changeTemperature(event) {
  event.preventDefault();
  let button = document.querySelector("button");
  button.innerHTML = "18 degreees";
}
let button = document.querySelector("button");
button.addEventListener("click", changeTemperature);

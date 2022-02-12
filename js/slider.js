const slider = document.querySelector("#range-slider");
const value = document.querySelector("#range-value");

slider.addEventListener("input", (e) => {
  value.textContent = e.target.value;
});

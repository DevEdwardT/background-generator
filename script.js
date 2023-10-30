var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

body.style.background = "linear-gradient(to right, #000000, #ffffff)";
css.innerText = body.style.background + ";";

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
console.log(color1.value);
console.log(color2.value);

function randomRGB() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var hexColor1 = rgbToHex(x, y, z);
  var x2 = Math.floor(Math.random() * 256);
  var y2 = Math.floor(Math.random() * 256);
  var z2 = Math.floor(Math.random() * 256);
  var hexColor2 = rgbToHex(x2, y2, z2);
  color1.value = hexColor1;
  color2.value = hexColor2;
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

random.addEventListener("click", randomRGB);

function componentToHex(color) {
  var hex = color.toString(16);
  console.log(hex);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

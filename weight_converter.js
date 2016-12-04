spaceWeight = () => {
let weight = document.getElementById("earthWeight").value;

let mercuryWeight = weight * 0.4;
let venusWeight = weight * 0.9;
let moonWeight = weight * 0.17;
let marsWeight = weight * 0.4;
let jupiterWeight = weight * 2.5;
let uranusWeight = weight * 0.8;
let neptuneWeight = weight * 1.2;
let plutoWeight = weight * 0.01;

  return document.getElementById("output").value = "Your weight on Mercury is approximately: " + mercuryWeight + " lbs. \n" + "\n Your weight on Venus is approximately: " + venusWeight + " lbs. \n" + "\n Your weight on the Moon is approximately: " + moonWeight + " lbs. \n" + "\n Your weight on Mars is approximately: " + marsWeight + " lbs. \n" + "\n Your weight on Jupiter is approximately: " + jupiterWeight + " lbs. \n" + "\n Your weight on Uranus is approximately: " + uranusWeight + " lbs. \n" + "\n Your weight on Neptune is approximately: " + neptuneWeight + " lbs. \n" + "\n Your weight on Pluto is approximately: " + plutoWeight + " lbs.";
};

console.log("Javascript successfully linked.")
localStorage.setItem("It's a secret to everybody.", "It's dangerous to go alone! Take this. 🗡️")

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

// Checks for current time and then displays appropriate greeting
if (isMorning) {
  document.getElementById("welcome").innerHTML = "Good morning!"
} else if (isAfternoon) {
  document.getElementById("welcome").innerHTML = "Good afternoon!"
} else if (isEvening) {
  document.getElementById("welcome").innerHTML = "Good evening!"
}

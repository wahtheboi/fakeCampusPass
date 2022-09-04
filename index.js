let monthEl =  document.getElementById("month-el")
let timeEl = document.getElementById("time-el")

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const m = new Date();
let month = months[m.getMonth()];

var d = new Date();
var dd = String(d.getDate()).padStart(2, '0');

let min = "0"
if (d.getMinutes() > 0 && d.getMinutes() <= 9) {
    min = "0" + d.getMinutes()
}
else if (d.getMinutes() === "0") {
    min = "00"
}
else (min = d.getMinutes())

var time = d.getHours() + "" + min

monthEl.textContent = month + " " + dd
timeEl.textContent = time

let changingDateEl = document.getElementById("changingDate")


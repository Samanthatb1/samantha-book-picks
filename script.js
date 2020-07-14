
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  var currentDate = new Date()
  currentDate.setMinutes(0)
  var secondsRatio = currentDate.getSeconds() / 60
  var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 61
  var hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
  console.log(secondsRatio, minutesRatio, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
  console.log("--rotation")
}

setClock()

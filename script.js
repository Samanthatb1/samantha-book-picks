setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const philosophy = document.getElementById("phil") ;
const favourite = document.getElementById("fav") ;

var a = 1;
var b = 1 ;

const arrowUpOne = documet.getElementById("arrow-up-one") ;
const arrowUpTwo = documet.getElementById("arrow-up-two") ;
const arrowDownOne = documet.getElementById("arrow-down-one") ;
const arrowDownTwo = documet.getElementById("arrow-down-two") ;

function setClock() {
  var currentDate = new Date()
  var secondsRatio = currentDate.getSeconds() / 60
  var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 61
  var hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

function changeColor(){
  const bookOne = document.getElementById
}

function displayOne(){
  if(a==1){
    favourite.classList.remove("fade-in") ;
    favourite.classList.remove("fade-out") ;

    philosophy.classList.add("fade-in") ;
    b = 1 ;
    return a=0;
  } else {
    philosophy.classList.remove("fade-in") ;
    philosophy.classList.add("fade-out") ;
    setTimeout(function(){
      philosophy.classList.remove("fade-out") ;
    }, 400); 
    return a=1 ;
  }
}

function displayTwo(){
  if(b==1){
    philosophy.classList.remove("fade-in") ;
    philosophy.classList.remove("fade-out") ;

    favourite.classList.add("fade-in") ;
    a = 1 ;
    return b=0;
  } else {
    favourite.classList.remove("fade-in") ;
    favourite.classList.add("fade-out") ;
    setTimeout(function(){
      favourite.classList.remove("fade-out") ;
    }, 400); 
    return b=1 ;
  }
}


setClock()


const secondsArrow = document.querySelector(".seconds")
const minutArrow = document.querySelector(".minutes")
const hoursArrow = document.querySelector(".hours")

// Run this func every second
setInterval(() => {
  // Seconds Timer
  const seconds = new Date().getSeconds()
  secondsArrow.style.transform = `rotate(${seconds*6}deg)`
  // Minutes Timer
  const minutes = new Date().getMinutes()
  minutArrow.style.transform = `rotate(${minutes*6}deg)`
  // Hours Timer
  const hours = new Date().getHours()
  if(hours === 12) hoursArrow.style.transform = `rotate(${12|12*30}deg)`
  else hoursArrow.style.transform = `rotate(${hours%12*30}deg)`

},1000)

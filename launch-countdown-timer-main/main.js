const day = document.getElementById("day")
const dayBack = document.querySelector(".day")
const hour = document.getElementById("hour")
const hourBack = document.querySelector(".hour")
const minute = document.getElementById("minute")
const minuteBack = document.querySelector(".minute")
const second = document.getElementById("second")
const secondBack = document.querySelector(".second")


const countDownDate = new Date("Feb 18, 2023 10:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(() => {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Output the result

  const digits = n => {
    let count = 0
    if (n >= 1) ++count

    while (n / 10 >= 1) {
      n /= 10
      ++count
    }

    return count
  }

  
  day.innerHTML = `${digits(days) > 1 ? days : "0" + days}`
  dayBack.innerHTML = `${digits(days) > 1 ? days : "0" + days}`
  hour.innerHTML = `${digits(hours) > 1 ? hours : "0" + hours}`
  hourBack.innerHTML = `${digits(hours) > 1 ? hours : "0" + hours}`
  minute.innerHTML = `${digits(minutes) > 1 ? minutes : "0" + minutes}`
  minuteBack.innerHTML = `${digits(minutes) > 1 ? minutes : "0" + minutes}`
  second.innerHTML = `${digits(seconds) > 1 ? seconds : "0" + seconds}`
  secondBack.innerHTML = `${digits(seconds) > 1 ? seconds : "0" + seconds}`
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    console.log("happy new life")
  }
}, 1000);
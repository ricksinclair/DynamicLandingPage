//DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

//globals
let today = new Date();
hour = today.getHours();
min = today.getMinutes();
sec = today.getSeconds();

//Show the time

const showTime = () => {
  let today = new Date();
  hour = today.getHours();
  min = today.getMinutes();
  sec = today.getSeconds();

  //Define AM and PM and set on screen dynamically
  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr Format

  hour = hour % 12 || 12;

  //output the time to the screen
  time.innerHTML = `${hour}<span>:</span>${addzero(min)}<span>:</span>${addzero(
    sec
  )}`;

  setTimeout(() => {
    showTime();
  }, 1000);
};

//add Zero for time format less than ten seconds
const addzero = n => {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

//set background image and greeting based on time
const setBgGreet = () => {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12 && hour > 5) {
    //Morning Settings
    document.body.style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5)),url('../img/sun_beams_dawn_meadow_morning_45819_1920x1080.jpg')";
    greeting.textContent = "Good Morning";
  } else if (hour < 19 && hour > 11) {
    // afternoonSettings
    document.body.style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5)),url('../img/1920x1080-wallpaper-beach-3.jpg')";
    greeting.textContent = "Good Afternoon";
  } else {
    //Evening
    document.body.style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0,0.5), rgba(0, 0, 0,0.5)),url('../img/39602-horizon-astronomical_object-the_starry_night-nature-sky-1920x1080.jpg')";
    greeting.textContent = "Good Evening";
    document.body.style.color = "white";
  }
};

//Run
setBgGreet();
showTime();

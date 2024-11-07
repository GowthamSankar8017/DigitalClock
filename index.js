let newtime;

// function displaytime(){

setInterval(() => {

  let newtime = new Date();

  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let pmam = document.getElementById("pmam");


  let hr = newtime.getHours();
  let min = zero(newtime.getMinutes());
  let sec = zero(newtime.getSeconds());


if (hr > 12) {
    hr = hr - 12;
    pmam.innerHTML = "PM";
  } else {
    pmam.innerHTML = "AM";
  }

  hours.innerHTML =zero(hr);
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
}, 500);

function zero(number) {
  return number < 10 ? "0" + number : number;
}

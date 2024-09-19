let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
let apiId = `7b3a1a891bc9994755b43204e7adb60e`;
let btn = document.getElementById('btn');
let inpVal = document.querySelector('.inputBox')
async function giveData(inpvalue) {
  let res = await fetch(apiUrl + `&appid=${apiId}&q=${inpvalue}`)
  console.log(res);
  let data = await res.json();
  if (res.status == 200) {
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.notFound').style.display = 'none';
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = Math.round(data.main.humidity);
    document.querySelector('.wind').innerHTML = data.wind.speed;

    if (data.weather[0].main == 'Clear') {
      document.querySelector('.weather-icon').src = 'images/clear.png'
    } else if (data.weather[0].main == 'Clouds') {
      document.querySelector('.weather-icon').src = 'images/clouds.png'
    } else if (data.weather[0].main == 'Drizzle') {
      document.querySelector('.weather-icon').src = 'images/drizzle.png'
    } else if (data.weather[0].main == 'Humidity') {
      document.querySelector('.weather-icon').src = 'images/humidity.png'
    } else if (data.weather[0].main == 'Mist') {
      document.querySelector('.weather-icon').src = 'images/mist.png'
    } else if (data.weather[0].main == 'Rain') {
      document.querySelector('.weather-icon').src = 'images/rain.png'
    } else if (data.weather[0].main == 'Snow') {
      document.querySelector('.weather-icon').src = 'images/snow.png'
    } else if (data.weather[0].main == 'Wind') {
      document.querySelector('.weather-icon').src = 'images/wind.png'
    }
  }
  else {
    document.querySelector('.weather').style.display = 'none';
    document.querySelector('.notFound').style.display = 'block';
  }





}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  giveData(inpVal.value);
  inpVal.value = ""
})

inpVal.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
    giveData(inpVal.value);
    inpVal.value = ""
  }

})


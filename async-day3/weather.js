
async function weatherData()
{

    let cityName = document.getElementById('cityName').value;

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a43292ebbf1482b46db85b4a44f4a740`)

    let result = await res.json()

    console.log(result);

    //create a card for get weather
    let weatherCard = document.getElementById('weatherCard');

    weatherCard.innerHTML = `<div class="card" style="width: 18rem">
    <img src="https://img.freepik.com/free-vector/watercolor-weather-effects-collection_23-2149115331.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698969600&semt=sph" class="card-img-top" alt="weather image">
    <div class="card-body">
      <h5 class="card-title">Weather Data</h5>
      <p class="card-text">Temperature: ${result.main.temp} </p>
      <p class="card-text">Windspeed: ${result.wind.speed} </p>
    </div>
  </div>`
}
// weatherData();
let listDays = document.querySelectorAll('#card');

let date = 0;
fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Kharkiv&cnt=40&appid=2dc8c616332e7fc597d9cb8f73e814bf`)
    .then(function (resp) { return resp.json() })
    .then(function(data) {
        for (let j = 0; j < 5; j++, date += 8) {
            listDays[j].querySelector('.temp').innerHTML = Math.round(data.list[date].main.temp - 273) + '&deg;';
            listDays[j].querySelector('#summary').innerHTML = data.list[date].weather[0].description;
            listDays[j].querySelector('#data').innerHTML = new Date(data.list[date].dt * 1000).toLocaleDateString("en", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
              });
            listDays[j].querySelector('#cardWeather img').src = 'https://openweathermap.org/img/wn/'+data.list[date].weather[0]['icon']+'@2x.png';
        }
    })
    .catch(function() {
        return false
    });



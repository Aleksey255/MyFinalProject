fetch("https://api.openweathermap.org/data/2.5/weather?q=москва&lang=ru&appid=354eb0a9c61f23942679d31fc0fefe97")
.then(function(resp){return resp.json()})
.then(function(data){
    console.log(data);
    document.querySelector(".icon").innerHTML = `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`
    document.querySelector(".city-name").innerHTML = data.name
    document.querySelector(".cloud").innerHTML = data.weather[0]['description']
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273)+'&deg;C'
    document.querySelector(".temp-min").innerHTML = Math.round(data.main.temp_min - 273)+'&deg;C'
    document.querySelector(".temp-max").innerHTML = Math.round(data.main.temp_max - 273)+'&deg;C'
    document.querySelector(".wind").innerHTML = 'Ветер' + ' ' + data.wind.speed + 'м/с'
})
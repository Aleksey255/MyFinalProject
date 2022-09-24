fetch("https://api.openweathermap.org/data/2.5/weather?q=москва&lang=ru&appid=354eb0a9c61f23942679d31fc0fefe97")
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector(".icon").innerHTML = `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`
        document.querySelector(".city-name").innerHTML = data.name
        document.querySelector(".cloud").innerHTML = data.weather[0]['description']
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273) + '&deg;C'
        document.querySelector(".temp-min").innerHTML = Math.round(data.main.temp_min - 273) + '&deg;'
        document.querySelector(".temp-max").innerHTML = Math.round(data.main.temp_max - 273) + '&deg;'
        document.querySelector(".wind").innerHTML = 'Ветер' + ' ' + Math.round(data.wind.speed) + 'м/с'
    })

let inp = document.querySelector(".ad")
let inp1 = document.querySelector(".del")
let butt = document.querySelector(".btn")
let butt1 = document.querySelector(".btn2")
let ul = document.querySelector('.ul');
butt.onclick = () => {
    let li = document.createElement('li');
    ul.append(li);
    li.textContent = inp.value;
    let btn = document.createElement("button")
    li.append(btn)
    btn.textContent = "Удалить"
}
ul.addEventListener('click', function (event) {
    if (event.target.nodeName === 'BUTTON') {
        event.target.closest('button')
        event.target.closest('li').remove()
    }
})

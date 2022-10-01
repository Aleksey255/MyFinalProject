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
let butt = document.querySelector(".btn")
let ul = document.querySelector('.ul');
butt.onclick = () => {
    let li = document.createElement('li');
    ul.append(li);
    li.textContent = inp.value;
    let btn = document.createElement("button")
    li.append(btn)
    btn.textContent = "Удалить"
    btn.style.marginLeft = "3em"
}
ul.addEventListener('click', function (event) {
    if (event.target.nodeName === 'BUTTON') {
        event.target.closest('button')
        event.target.closest('li').remove()
    }
})

let out = document.querySelector(".result")
let x = ""
let y = ""
let oper = ""
finish = false

let number = document.querySelectorAll(".num")
console.log(number);
for (let i = 0; i < number.length; i++) {
    number[i].onclick = function () {
        let num = this.getAttribute("data")
        if (y == "" && oper == "") {
            x += num
            out.textContent = x
            console.log(x, oper, y);
        }
        else if (x !== "" && y !== "" && finish) {
            y = num
            finish = false
            out.textContent = y
        }
        else {
            y += num
            out.textContent = y
        }
        console.log(x, oper, y);
    }
}

let operation = document.querySelectorAll(".op")
console.log(operation);
for (let j = 0; j < operation.length; j++) {
    operation[j].onclick = function () {
        num = this.getAttribute("data")
        oper = num
        out.textContent = oper
        console.log(x, oper, y);
    }

}

document.querySelector(".ravno").onclick = function () {
    if (y == "") y = x
    switch (oper) {
        case "+":
            x = (+x) + (+y)
            break;
        case "-":
            x = x - y
            break
        case "*":
            x = x * y
            break
        case "/":
            if (y == "0") {
                out.textContent = "Ошибка"
                x = ""
                y = ""
                oper = ""
            }
            x = x / y
            break
    }
    finish = true
    out.textContent = x
    console.log(x, oper, y);
}

document.querySelector(".backspace").onclick = function () {
    out.textContent = 0
    x = ""
    y = ""
    oper = ""
}




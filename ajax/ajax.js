document.getElementById("quote").onclick = getJoke;

setInterval(getJoke, 3600000); // every 1 hour

function getJoke() {
    fetch('https://jokes-plaul.rhcloud.com/api/joke', {method: 'GET'}).then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("joke").innerHTML = data.joke;
    });
}

getServerTime();
setInterval(getServerTime, 1000);

function getServerTime() {
    fetch('http://localhost:8080/time', {method: 'GET'}).then(function (response) {
        return response.json();
    }).then(function (data) {
        document.getElementById("time").innerHTML = data.time;
    });
}

document.getElementById("people_btn").onclick = getPeople;

function getPeople() {
    fetch('http://localhost:8080/person', {method: 'GET'}).then(function (response) {
        return response.json();
    }).then(function (people) {
        var data = "";
        for (var i = 0; i < people.length; i++) {
            var person = people[i];
            data += person.firstName + " " + person.lastName + ", " + person.age + "<br>";
        }
        document.getElementById("people").innerHTML = data;
    });
}

document.getElementById("add_person").onclick = getPerson;

function getPerson(e) {
    e.preventDefault();
    var form = document.querySelector("form");
    var formData = new FormData(form);
    var body = {}
    for (var entry of formData.entries()) {
        body[entry[0]] = entry[1];
    }
    body = JSON.stringify(body);
    console.log(body);
    fetch('http://localhost:8080/person/add', {method: 'POST', body: body}).then(function (response) {
        return response.json();
    }).then(function (data) {
        if (!data.hasOwnProperty("error")) {
            alert("Done, you can click get People button and see for your self.");
        }
    });
}
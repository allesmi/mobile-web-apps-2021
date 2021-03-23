var x;
let y;
const z = 42;

function sayHello() {
    console.log('Hello world');
}

function sayHelloWithName(name) {
    console.log('Hello ' + name);
}

const string1 = 'Salzburg';
const land = `Bundesland ${string1}`;

const button = document.querySelector('button');
const inputs = document.querySelectorAll('input');

sayHelloWithName('Alex');

for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    // ...
}

for (let element of inputs) {
    // ...
}

if (inputs.length > 3) {
    // ...
}
else if (false) {
    // wird nie aufgerufen
}
else {
    // ...
}

const isEnabled = true;
if (isEnabled) {
    // ...
}

// === fuer strikte Gleichheit
// == fuer lose Gleichheit
// https://developer.mozilla.org/de/docs/Web/JavaScript/Equality_comparisons_and_sameness
const thisIsTrue = ("17" == 17);
const thisIsFalse = ("17" === 17);

console.log(typeof (isEnabled));

let pi = 3;

pi = parseInt("3");
pi = parseFloat("3.1415");

let myList = [];
myList = [1, 2, 3, 4, 5];

let myObject = {};
myObject = {
    name: "wert", // "name": "wert"
    age: 42,
    pets: ["mauzi", "bello"],
    address: {
        street: "asdf",
        house_number: 5
    }
};

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
    }
}

button.addEventListener('click', sayHello);

let main = document.querySelector('main');

let h2 = document.createElement('h2');

h2.textContent = "Dynamisch erzeugtes HTML-Element";

main.appendChild(h2);

fetch('index.html')
    .then(function (response) {
        if (response.ok) {
            return response.text();
        }
        else {
            throw new Error('Response is not OK');
        }
    })
    .then(function (dataAsText) {
        console.log(dataAsText);
    })
    .catch(function (error) {
        h2.textContent = "GET Request failed";
    });

fetch('https://www.example.com/api/messages', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(myObject)
})
    .then(function (response) {
        if (response.ok) {
            // ...
        }
    });


fetch('data.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (dataAsJSObject) {
        console.log(dataAsJSObject.name);
    });

const myJSONString = JSON.stringify({ id: 123, name: "asdfasdf" });

const myObject2 = JSON.parse(myJSONString);

if (navigator.geolocation) {
    h2.textContent = "Geolocation wird unterstuetzt.";
}
else {
    h2.textContent = "Geolocation wird nicht unterstuetzt."
}

navigator.permissions.query({ name: 'geolocation' })
    .then(function (result) {
        if (result.state === 'denied') {

        }
        else if (result.state === 'prompt') {

        }
    });

navigator.geolocation.getCurrentPosition(
    function (position) {
        // ...
        // position.coords.latitude, longitude, accuracy
    },
    function (positionError) {
        // ...
    },
    {
        timeout: 5000,
        enableHighAccuracy: true
    }
);

// Leaflet
// https://leafletjs.com/

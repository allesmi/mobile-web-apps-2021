const main = document.querySelector('main');
const output = document.querySelector('#output');

let nextId = 0;
let animals = [];

function getRandomDogName() {
    const dogNames = ['Pluto', 'Lassie', 'Zerberus'];
    return dogNames[Math.floor(Math.random() * dogNames.length)];
}

function onCreateButtonClick(event) {
    // HÜ: Ein zufälliges Tier soll erzeugt werden, entweder Hund oder Kuh
    // if (Math.random() > 0.5) ... else ...

    // Neues objekt der Klasse Dog erzeugen mit beliebigem Namen
    const dog = new Dog(getRandomDogName() + nextId);

    // objekt in animals einfuegen

    // neues HTML Element mit der Id des objekts
    // und als Inhalt Dog: <name> erzeugen und in den DOM
    // Tree einfuegen.

    // HÜ: Je nach Tierart unterschiedliche CSS Klassen setzen
    // element.classList.add('dog')
}

function onMainClick(event) {
    // HÜ: 
    // Mittels data attribute das geklickte Tier-Objekt finden
    // Ausgabe von Tiername (name) und Tierlaut (talk())
}

const createButton = document.querySelector('#create-button');
createButton.addEventListener('click', onCreateButtonClick);

main.addEventListener('click', onMainClick);
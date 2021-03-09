const main = document.querySelector('main');
const output = document.querySelector('#output');

let nextId = 0;
let animals = [];

function getRandomDogName() {
    const dogNames = ['Pluto', 'Lassie', 'Zerberus'];
    return dogNames[Math.floor(Math.random() * dogNames.length)];
}

function getRandomCowName() {
    const dogNames = ['Ophelia', 'Zenzi', 'Resi'];
    return dogNames[Math.floor(Math.random() * dogNames.length)];
}

function onCreateButtonClick(event) {
    
    const element = document.createElement('div');
    let animal;
    const id = nextId;
    nextId++;

    if (Math.random() < 0.5) {
        const name = getRandomDogName();
        animal = new Dog(name);
        element.textContent = `Dog: ${name}`;
        element.classList.add('dog');
    }
    else {
        const name = getRandomCowName();
        animal = new Cow(getRandomCowName());
        element.textContent = `Cow: ${name}`;
        element.classList.add('cow');
    }

    // objekt in animals einfuegen
    element.dataset.animalId = id;
    animals.push(animal);

    main.appendChild(element);
}

function onMainClick(event) {
    const id = parseInt(event.target.dataset.animalId);

    output.textContent = animals[id].talk();
}

const createButton = document.querySelector('#create-button');
createButton.addEventListener('click', onCreateButtonClick);

main.addEventListener('click', onMainClick);

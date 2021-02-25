let queue = new Queue('sepp', ' - ');
let stack = new Stack('steak');

// function push(element) {
//     stack.push(element);
// }

// function pop() {
//     return stack.pop();
// }

function onEnqueueButtonClick(event) {
    const elem = document.querySelector('#enqueue-value').value;

    queue.enqueue(elem);

    showDataStructure('queue', q);
}

function onDequeueButtonClick() {
    const elem = queue.dequeue();

    const output = document.querySelector('#dequeue-value');
    if (elem !== undefined) {
        output.classList.remove('warn');
        // entspricht $("#dequeue-value").html("..."):
        output.innerText = 'Wert: ' + elem;
    }
    else {
        output.classList.add('warn');
        output.innerText = 'Eine leere Queue kann kein dequeue!';
    }
    showDataStructure('queue', queue);
}

function onPushButtonClick() {
    const elem = document.querySelector('#push-value').value;

    stack.push(elem);

    showDataStructure('stack', stack);
}

function onPopButtonClick() {
    const elem = stack.pop();

    const output = document.querySelector('#pop-value');
    if (elem !== undefined) {
        output.classList.remove('warn');
        // entspricht $("#dequeue-value").html("..."):
        output.innerText = 'Wert: ' + elem;
    }
    else {
        output.classList.add('warn');
        output.innerText = 'Ein leerer Stack kann kein pop!';
    }
    showDataStructure('stack', stack);
}

/**
 * 
 * @param {string} id The ID of the HTML Element
 * @param {List} data_structure The data structure to show
 */
function showDataStructure(id, data_structure) {
    const div = document.querySelector('#' + id);
    div.querySelector('.output').textContent = data_structure.toString();
}

document.querySelector('#enqueue-button').addEventListener('click', onEnqueueButtonClick);
document.querySelector('#dequeue-button').addEventListener('click', onDequeueButtonClick);

document.querySelector('#push-button').addEventListener('click', onPushButtonClick);
document.querySelector('#pop-button').addEventListener('click', onPopButtonClick);

showDataStructure('stack', stack);

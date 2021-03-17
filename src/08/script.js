function getMessages() {
    fetch('https://test.sunbeng.eu/api/messages')
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Error getting messages');
            }
        })
        .then(function (messages) {
            const ul = document.querySelector('#messages');
            ul.textContent = '';

            for (const message of messages) {
                const li = document.createElement('li');

                const span1 = document.createElement('span');
                span1.textContent = message.timestamp;
                span1.classList.add('timestamp');

                const span2 = document.createElement('span');
                span2.textContent = `${message.name}: `;
                span2.classList.add('user');

                const span3 = document.createElement('span');
                span3.textContent = message.text;

                li.appendChild(span1);
                li.appendChild(span2);
                li.appendChild(span3);

                ul.appendChild(li);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

setInterval(getMessages, 500);

function onSendClick(event) {
    const message = {
        name: document.querySelector('#input-name').value,
        text: document.querySelector('#input-text').value
    };

    // Um ein JSON an den Server zu schicken:
    // 1. method: 'POST'
    // 2. Content-Type Header
    // 3. JSON.stringify
    fetch('https://test.sunbeng.eu/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    })
        .then(function (response) {
            if (response.ok) {
                document.querySelector('#input-text').value = '';
                getMessages();
            }
            else {
                throw new Error('Error posting message');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

document.querySelector('#button-send').addEventListener('click', onSendClick);
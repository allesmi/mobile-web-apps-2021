// GET auf unseren Server
fetch('http://localhost:3000?search=hans&user=soundso')
    .then(function (response) {
        if (response.ok) {
            return response.text();
        }
    })
    .then(function (data) {
        console.log(data);
    });

// POST auf unseren Server
const data = {
    message: "hello server!"
};

fetch('http://localhost:3000', {
    method: 'POST',
    // Damit der Server weiss, dass der Body dieser Nachricht im Format
    // JSON ist, muessen wir Content-Type auf 'application/json' setzen.
    // Ein PNG Bild haette zB. image/png'.
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data), // Daten an den Server
    // -> '{ "message": "hello server!" }'
})
    .then(function (response) {
        console.log(response);
    });
function getFilms(event) {
  // fetch:

  fetch("https://ghibliapi.herokuapp.com/films")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("API error");
      }
    })
    .then(function (films) {
      const ul = document.querySelector("#film-list");

      // Fuer jeden Film
      for (let film of films) {
        // Die for ... of Schleife entspricht:
        // for (let i = 0; i < films.length; i++) {
        //  const film = films[i];

        //   erzeugen wir ein li
        const li = document.createElement("li");
        const title = film.title;
        const id = film.id;

        const a = document.createElement("a");
        //   befuellen das li mit Information zum Film
        a.textContent = title;
        a.href = `film.html?film_id=${id}`;

        //   Fuege li an unsere ul hinzu
        li.appendChild(a);
        ul.appendChild(li);
      }
    });
}

document.querySelector("#get-film-btn").addEventListener("click", getFilms);

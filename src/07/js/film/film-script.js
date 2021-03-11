const params = new URLSearchParams(window.location.search);
const id = params.get("film_id");

if (id) {
  fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      else if (response.status === 404) {
        throw new Error("Film nicht gefunden");
      } else {
        throw new Error(`API Fehler bei id=${id}`);
      }
    })
    .then(function (film) {
      document.querySelector("#film-title").textContent =
        `${film.title} (${film.release_date})`;
      document.querySelector("#film-description").textContent =
        film.description;
    })
    .catch(function (error) {
      document.querySelector("#film-title").textContent = error.message;
    });
}

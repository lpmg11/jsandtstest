const hola = fetch("swapi.dev/api/people/1")
    .then((response) => response.json())
    .then((data) => console.log(data));

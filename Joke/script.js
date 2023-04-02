document.addEventListener("click", function(event) {
    // Checking if the button was clicked
    if (!event.target.matches("#button")) return;

    fetch("https://v2.jokeapi.dev/joke/Dark")
        .then((response) => response.json())
        .then((data) => renderJoke(data))
});

function renderJoke(data) {
    // Get text elements
    const setup = document.getElementById("setup");
    const delivery = document.getElementById("delivery");

    // Hide error and render jokes
    setup.innerHTML = data.setup;
    delivery.innerHTML = data.delivery;
}
// JavaScript code for the waste sorting game
const startButton = document.getElementById("start-game");
const gameContainer = document.getElementById("game-container");

startButton.addEventListener("click", startGame);

function startGame() {
    // Remove the start button
    startButton.style.display = "none";

    // Generate a random waste item for sorting
    const wasteItems = ["Plastic", "Paper", "Glass", "Organic"];
    const randomItem = wasteItems[Math.floor(Math.random() * wasteItems.length)];

    // Create the sorting options
    const sortingOptions = wasteItems.slice().sort(() => Math.random() - 0.5);

    // Display the waste item and sorting options
    gameContainer.innerHTML = `
        <p>Sort the item: <strong>${randomItem}</strong></p>
        <ul id="sorting-options">
            ${sortingOptions.map(option => `<li>${option}</li>`).join("")}
        </ul>
    `;

    // Add event listeners for sorting
    const sortingList = document.getElementById("sorting-options");
    sortingList.addEventListener("click", handleSorting);
}

function handleSorting(event) {
    const clickedItem = event.target.textContent;
    const correctItem = document.querySelector("#game-container strong").textContent;

    if (clickedItem === correctItem) {
        gameContainer.innerHTML = "<p>Correct! Good job!</p>";
    } else {
        gameContainer.innerHTML = "<p>Oops! That's not correct. Try again.</p>";
    }

    // Add a new start button
    setTimeout(() => {
        gameContainer.innerHTML = "";
        startButton.style.display = "block";
    }, 2000);
}

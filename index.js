document.addEventListener("DOMContentLoaded", function () {
    const productButtons = document.querySelectorAll(".buttons");
    const products = document.querySelectorAll(".product");

    productButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Hide all products
            products.forEach(function (product) {
                product.classList.add("hiddenItem");
            });

            // Remove "hiddenItem" class from the clicked product
            const productId = button.id.replace("btn", "product");
            const selectedProduct = document.getElementById(productId);
            selectedProduct.classList.remove("hiddenItem");
            selectedProduct.classList.add("currentItem");

            // Add "hiddenItem" class to the previously displayed product
            const currentProduct = document.querySelector(".currentItem");
            if (currentProduct !== selectedProduct) {
                currentProduct.classList.add("hiddenItem");
                currentProduct.classList.remove("currentItem");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const guessButton = document.getElementById("guessGame");
    const numGuessInput = document.getElementById("numGuess");
    const gameOutput = document.getElementById("gameOutput");

    guessButton.addEventListener("click", function () {
        function playGame() {
            const userGuess = parseInt(numGuessInput.value);
            const randomNumber = Math.floor(Math.random() * 10) + 1;

            if (userGuess === randomNumber) {
                gameOutput.textContent = `Congratulations! You guessed correctly (${userGuess}). You win!`;
            } else {
                gameOutput.textContent = `Sorry, the correct number was ${randomNumber}. Try again.`;
            }
        }

        playGame();
    });
});






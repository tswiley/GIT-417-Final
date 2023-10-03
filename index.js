"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const productButtons = document.querySelectorAll(".buttons");
    const productSections = document.querySelectorAll("#switcher2 > section");

    productButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            productSections.forEach(function (section) {
                section.classList.remove("currentItem");
                section.classList.add("hiddenItem");
            });

            const productId = button.id.replace("btn", "product");
            const selectedProduct = document.getElementById(productId);
            selectedProduct.classList.remove("hiddenItem");
            selectedProduct.classList.add("currentItem");
        });
    });

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

    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const contactMethodInputs = document.querySelectorAll('input[name="contact-method"]'); // Select all radio buttons
    const commentsTextarea = document.getElementById("comments");

    // Regular expressions for format validation
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    form.addEventListener("submit", function (event) {
        let hasErrors = false;

        // Reset error messages
        document.querySelectorAll(".error-message").forEach(function (error) {
            error.textContent = "";
        });

        if (nameInput.value.trim().length < 3) {
            document.getElementById("name-error").textContent = "Name must be at least 3 characters long";
            hasErrors = true;
        }

        if (!phoneRegex.test(phoneInput.value.trim())) {
            document.getElementById("phone-error").textContent = "Phone must be in XXX-XXX-XXXX format";
            hasErrors = true;
        }

        if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById("email-error").textContent = "Invalid email format";
            hasErrors = true;
        }

        let selectedContactMethod = false;
        contactMethodInputs.forEach(function (input) {
            if (input.checked) {
                selectedContactMethod = true;
            }
        });

        if (!selectedContactMethod) {
            document.getElementById("contact-method-error").textContent = "Please select a contact method";
            hasErrors = true;
        }

        if (commentsTextarea.value.trim().length === 0) {
            document.getElementById("comments-error").textContent = "Comments are required";
            hasErrors = true;
        }

        if (hasErrors) {
            event.preventDefault(); // Prevent form submission if there are errors
        } else {
            alert("Thank you for contacting us! We look forward to working with you. Don't forget to add us on social media!");
        }
    });
});

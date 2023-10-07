"use strict";

// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get the element with the ID "gameOutput" and hide it initially
    const gameOutput = document.getElementById("gameOutput");
    gameOutput.style.display = "none";

    // Get the "contactLink" element and add a click event listener to scroll to a specific section
    const contactLink = document.querySelector('a[href="#programs"]');
    contactLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior
        scrollToSection('#switcher2'); // Scroll to the specified section
    });

    // Get the "joinUsButton" element and add a click event listener to scroll to a specific section
    const joinUsButton = document.querySelector('.join-button');
    joinUsButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default button behavior
        scrollToSection('#switcher2'); // Scroll to the specified section
    });

    // Get the "contactLinkTop" element and add a click event listener to scroll to a specific section
    const contactLinkTop = document.querySelector('a[href="#contactUs"]');
    contactLinkTop.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior
        scrollToSection('#contactUs'); // Scroll to the specified section
    });

    // Get the "aboutLink" element and add a click event listener to scroll to a specific section
    const aboutLink = document.querySelector('a[href="#about"]');
    aboutLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior
        scrollToSection('.welcome'); // Scroll to the specified section
    });

    // Get elements for toggling dark mode
    const modeSwitchButton = document.getElementById("modeSwitchButton");
    const modeIcon = document.getElementById("modeIcon");

    // Add a click event listener to toggle dark mode and update the mode icon
    modeSwitchButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Update the mode icon based on the dark mode state
        if (document.body.classList.contains("dark-mode")) {
            modeIcon.classList.remove("fa-moon");
            modeIcon.classList.add("fa-sun");
        } else {
            modeIcon.classList.remove("fa-sun");
            modeIcon.classList.add("fa-moon");
        }
    });

    // Get product buttons and sections
    const productButtons = document.querySelectorAll(".buttons");
    const productSections = document.querySelectorAll("#switcher2 > section");

    // Add click event listeners to product buttons to show/hide product sections
    productButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Hide all product sections and show the selected one
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

    // Generate a random number for the guessing game
    let y = Math.floor(Math.random() * 10 + 1);
    let guess = 1;

    // Add a click event listener to the "guessGame" element for a number guessing game
    document.getElementById("guessGame").addEventListener("click", function (e) {
        e.preventDefault();

        // Get the user's guessed number from the input field
        const x = parseInt(document.getElementById("numGuess").value);
        const gameOutput = document.getElementById("gameOutput");

        // Check if the guessed number is correct and display a message
        if (x == y) {
            gameOutput.textContent = "CONGRATULATIONS!!! Your discount code is: fitlife2024";
        } else if (x > y) {
            guess++;
            gameOutput.textContent = "OOPS SORRY!! TRY A SMALLER NUMBER";
        } else {
            guess++;
            gameOutput.textContent = "OOPS SORRY!! TRY A GREATER NUMBER";
        }

        // Show the game output and clear the input field
        gameOutput.style.display = "block";
        document.getElementById("numGuess").value = "";
    });

    // Get form elements for contact information
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const contactMethodInputs = document.querySelectorAll('input[name="contact-method"]');
    const commentsTextarea = document.getElementById("comments");

    // Regular expressions for validation
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Add a submit event listener to the contact form for validation
    form.addEventListener("submit", function (event) {
        let hasErrors = false;

        // Clear existing error messages
        document.querySelectorAll(".error-message").forEach(function (error) {
            error.textContent = "";
        });

        // Validate name length
        if (nameInput.value.trim().length < 3) {
            document.getElementById("name-error").textContent = "Name must be at least 3 characters long";
            hasErrors = true;
        }

        // Validate phone number format
        if (!phoneRegex.test(phoneInput.value.trim())) {
            document.getElementById("phone-error").textContent = "Phone must be in XXX-XXX-XXXX format";
            hasErrors = true;
        }

        // Validate email format
        if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById("email-error").textContent = "Invalid email format";
            hasErrors = true;
        }

        // Check if a contact method is selected
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

        // Check if comments are provided
        if (commentsTextarea.value.trim().length === 0) {
            document.getElementById("comments-error").textContent = "Comments are required";
            hasErrors = true;
        }

        // Prevent form submission if there are errors
        if (hasErrors) {
            event.preventDefault();
        } else {
            event.preventDefault();

            // Display a thank you message, reset the form, and potentially add other actions
            alert("Thank you for contacting us! We look forward to working with you. Don't forget to add us on social media!");

            form.reset();
        }
    });

    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            const offsetTop = section.offsetTop;

            // Scroll to the specified section smoothly
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Function to scroll to the top of the page
    function scrollToTop() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    // Get the "back-to-top-button" element and add a click event listener to scroll to the top
    const backToTopButton = document.getElementById("back-to-top-button");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function (event) {
            event.preventDefault();
            scrollToTop();
        });
    }
});

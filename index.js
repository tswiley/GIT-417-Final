"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector('a[href="#programs"]');

    contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        const contactSection = document.querySelector('#switcher2');
        const offsetTop = contactSection.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector('a[href="#contactUs"]');

    contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        const contactSection = document.querySelector('#contactUs');
        const offsetTop = contactSection.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const modeSwitchButton = document.getElementById("modeSwitchButton");
    const modeIcon = document.getElementById("modeIcon");

    modeSwitchButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            modeIcon.classList.remove("fa-moon");
            modeIcon.classList.add("fa-sun");
        } else {
            modeIcon.classList.remove("fa-sun");
            modeIcon.classList.add("fa-moon");
        }
    });
});

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

    let y = Math.floor(Math.random() * 10 + 1);
    let guess = 1;

    document.getElementById("guessGame").addEventListener("click", function (e) {
        e.preventDefault();

        const x = parseInt(document.getElementById("numGuess").value);
        const gameOutput = document.getElementById("gameOutput");

        if (x == y) {
            gameOutput.textContent = "CONGRATULATIONS!!! Your discount code is: fitlife2024";
        } else if (x > y) {
            guess++;
            gameOutput.textContent = "OOPS SORRY!! TRY A SMALLER NUMBER";
        } else {
            guess++;
            gameOutput.textContent = "OOPS SORRY!! TRY A GREATER NUMBER";
        }

        document.getElementById("numGuess").value = "";
    });

    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const contactMethodInputs = document.querySelectorAll('input[name="contact-method"]');
    const commentsTextarea = document.getElementById("comments");

    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    form.addEventListener("submit", function (event) {
        let hasErrors = false;

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
            event.preventDefault();
        } else {
            alert("Thank you for contacting us! We look forward to working with you. Don't forget to add us on social media!");
        }
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top-button");

    if (backToTopButton) {
        backToTopButton.addEventListener("click", function (event) {
            event.preventDefault();
            scrollToTop();
        });
    }
});

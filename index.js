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

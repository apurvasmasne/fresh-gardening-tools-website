document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartCounter = document.getElementById("cartCount");
  let cartCount = 0;

  // Function to update cart count
  function updateCartCount() {
    cartCounter.textContent = cartCount;
  }

  // Event listener for add to cart buttons
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      cartCount++;
      updateCartCount();
      showCartCounter();
    });
  });

  // Function to show cart counter
  function showCartCounter() {
    const cartCounterDiv = document.querySelector(".cart-counter");
    cartCounterDiv.classList.remove("hidden");
  }
});

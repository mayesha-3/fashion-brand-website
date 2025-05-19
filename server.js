document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".addToCart_button");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemDetails = this.parentElement;
      const itemName = itemDetails.querySelector("div:first-child").innerText;
      const itemPrice = itemDetails.querySelector("div:nth-child(2)").innerText;

      addToCart(itemName, itemPrice);
    });
  });

  function addToCart(itemName, itemPrice) {
    // Add the item to the cart (this is a placeholder, you can implement your own cart logic)
    console.log(`Added to cart: ${itemName} - ${itemPrice}`);

    // Provide feedback to the user
    alert(`${itemName} has been added to your cart.`);
  }
});
        <script>document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".addToCart_button");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemDetails = this.parentElement;
      const itemName = itemDetails.querySelector("div:first-child").innerText;
      const itemPrice = itemDetails.querySelector("div:nth-child(2)").innerText;

      addToCart(itemName, itemPrice);
    });
  });

  function addToCart(itemName, itemPrice) {
    // Add the item to the cart (this is a placeholder, you can implement your own cart logic)
    console.log(`Added to cart: ${itemName} - ${itemPrice}`);

    // Provide feedback to the user
    alert(`${itemName} has been added to your cart.`);
  }
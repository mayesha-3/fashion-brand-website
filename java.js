const cartButtons = document.querySelectorAll(".cart-button");

cartButtons.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add("clicked");
  console.log("added");

  const productId = this.dataset.id || "N/A";
  const productPrice = this.dataset.price || "0";
  const productName = this.dataset.name || "N/A";

  console.log("Product ID:", productId);
  console.log("Product Price:", productPrice);
  console.log("Product Name:", productName);

  addtocartpopup();

  // Wait for the popup buttons to trigger the read process
  const popupread = document.querySelectorAll(".addedToCartButton");
  popupread.forEach((button) => {
    button.addEventListener("click", function read() {
      const sizeElement = document.getElementById("size");
      const productSize = sizeElement ? sizeElement.value : "N/A";

      const quantityElement = document.getElementById("quantity");
      const productQuantity = quantityElement ? quantityElement.value : "1";

      console.log("Product Size:", productSize);
      console.log("Product Quantity:", productQuantity);
      // Handle adding the product to the cart
      addToCart(
        productId,
        productName,
        productSize,
        productQuantity,
        productPrice
      );
    });
  });
}

function addToCart(
  productId,
  productName,
  productSize,
  productQuantity,
  productPrice
) {
  console.log("Product added to cart:");
  console.log("ID:", productId);
  console.log("Name:", productName);
  console.log("Size:", productSize);
  console.log("Quantity:", productQuantity);
  console.log("Price:", productPrice);

  // Save to local storage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({
    id: productId,
    name: productName,
    size: productSize,
    quantity: productQuantity,
    price: productPrice,
  });
  localStorage.setItem("cart", JSON.stringify(cart));

  // Send to external file
  sendToCartFile({
    id: productId,
    name: productName,
    size: productSize,
    quantity: productQuantity,
    price: productPrice,
  });

  console.log("Product details successfully sent to the cart file.");
  alert(`${productName} has been added to your cart.`);
  // Close the popup
  const popup = document.querySelector(".addtocartpopup");
  popup.style.display = "none";
  //increase the cart count
  const cartCount = document.querySelector(".cart-count");
  let count = parseInt(cartCount.textContent) || 0;
  count += parseInt(productQuantity);
  cartCount.textContent = count;
  cartCount.style.display = "block";
  cartCount.style.position = "absolute";
  cartCount.style.top = "0";
  cartCount.style.right = "0";
  cartCount.style.backgroundColor = "red";
}

//cartAddeds(productId, productPrice, productName, productSize, productQuantity);

const popupclose = document.querySelectorAll(".closePopup ");
popupclose.forEach((button) => {
  button.addEventListener("click", crossClick);
});

function crossClick() {
  let button = this;
  location.reload();
}

addtocartpopup = () => {
  const popup = document.querySelector(".addtocartpopup");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.backgroundColor = "white";
  popup.style.display = "block";
  popup.style.opacity = "1";
  popup.style.zIndex = "100";
  popup.style.transition = "transform 2.5s";
};

const cartAdded = document.querySelectorAll(".addedToCartButton");

cartAdded.forEach((button) => {
  button.addEventListener("click", cartAddeds);
});

const addToCartButton = document.querySelector(".addedToCartButton");
addToCartButton.addEventListener("click", cartAddeds);

//function cartAddeds(productId, productPrice, productName, productSize, productQuantity) {

// Reference button explicitly
//button.classList.add("addedToCartButtonClicked");

/**
   * console.log("Product added to cart:");
  console.log("ID:", productId);
  console.log("Name:", productName);
  console.log("Size:", productSize);
  console.log("Quantity:", productQuantity);
  console.log("Price:", productPrice);

  // Save to local storage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({
    id: productId,
    name: productName,
    size: productSize,
    quantity: productQuantity,
    price: productPrice,
  });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${productName} has been added to your cart.`);

  // Send to external file
  sendToCartFile({
    id: productId,
    name: productName,
    size: productSize,
    quantity: productQuantity,
    price: productPrice,
  });
}
   */

// Function to send data to an external "cart" file
function sendToCartFile(productDetails) {
  fetch("cart.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productDetails),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Product details successfully sent to the cart file.");
      } else {
        console.error("Failed to send product details to the cart file.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

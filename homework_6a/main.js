// Add to cart feature and a visual indication of items in the cart.
function addToCart() {
    var added = document.getElementById('individualproduct_checkout');
    added.innerHTML = "Added to cart!";
    var select = document.getElementById('quantity');
    var value = select.options[select.selectedIndex].value;
    console.log(value);

    if (value == 1) {
        document.getElementById("cart_img").src = 'images/one.png';
    }

    if (value == 2) {
        document.getElementById("cart_img").src = 'images/two.png';
    }

    if (value == 3) {
        document.getElementById("cart_img").src = 'images/three.png';
    }

    if (value == 4) {
        document.getElementById("cart_img").src = 'images/four.png';
    }

    if (value == 5) {
        document.getElementById("cart_img").src = 'images/five.png';
    }

    if (value == 6) {
        document.getElementById("cart_img").src = 'images/six.png';
    }

    if (value == 7) {
        document.getElementById("cart_img").src = 'images/seven.png';
    }

    if (value == 8) {
        document.getElementById("cart_img").src = 'images/eight.png';
    }

    if (value == 9) {
        document.getElementById("cart_img").src = 'images/nine.png';
    }
}

// Page updates when selecting a product's details
function updatePrice1() {
    var select = document.getElementById('quantity');
    var quantity = select.options[select.selectedIndex].value;
    console.log(quantity);

    if (quantity == 1) {
        newPrice = "$16.99";
        price = document.getElementById("individualproduct_price");
        price.innerHTML = newPrice;
        return newPrice;
    }

    if (quantity == 2) {
        newPrice = "$33.98";
        price = document.getElementById("individualproduct_price");
        price.innerHTML = newPrice;
        return newPrice;
    }

    if (quantity == 3) {
        newPrice = "$50.97";
        price = document.getElementById("individualproduct_price");
        price.innerHTML = newPrice;
        return newPrice;
    }

    if (quantity == 4) {
        newPrice = "$67.96";
        price = document.getElementById("individualproduct_price");
        price.innerHTML = newPrice;
        return newPrice;
    }

    if (quantity == 5) {
        newPrice = "$84.95";
        price = document.getElementById("individualproduct_price");
        price.innerHTML = newPrice;
        return newPrice;
    }
}
// Page updates when selecting a product's details
function updatePrice2() {
    var select = document.getElementById('quantity');
    var quantity = select.options[select.selectedIndex].value;
    console.log(quantity);

    if (quantity == 1) {
        newPrice = "$14.99";
        price = document.getElementById("individualproduct_price");
        price.innerHTML = newPrice;
        return newPrice;
    }

    if (quantity == 2) {
        newPrice = "$29.98";
        price = document.getElementById("individualproduct_price");
        price.innerHTML = newPrice;
        return newPrice;
    }

    if (quantity == 3) {
        newPrice = "$44.97";
        price = document.getElementById("individualproduct_price");
        price.innerHTML = newPrice;
        return newPrice;
    }

    if (quantity == 4) {
        newPrice = "$59.96";
        price = document.getElementById("individualproduct_price");
        price.innerHTML = newPrice;
        return newPrice;
    }

    if (quantity == 5) {
        newPrice = "$74.95";
        price = document.getElementById("individualproduct_price");
        price.innerHTML = newPrice;
        return newPrice;
    }
}

function addProduct(productName, totalPrice) {
    cart.push({productName, totalPrice});
    console.log(cart);
}

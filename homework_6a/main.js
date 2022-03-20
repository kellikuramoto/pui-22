/* function coffeeProduct (coffee, price, quantity, flavor, roast, origin, brewing, description) {
    this.coffee = coffee;
    this.quantity = quantity;
    this.price = price;
    this.flavor = flavor;
    this.roast = roast;
    this.origin = origin;
    this.brewing = brewing;
    this.description = description;
}

chocolateLover = new coffeeProduct(
    "Chocolate Lover", 
    14.99, 
    1, 
    "sweet / nippy / smoky", 
    "Medium", 
    "Costa Rica", 
    "French Press", 
    "Perfect for when you need that extra kick to wake up, or if you are one of those badasses that really enjoy the taste of strong black coffee. Strong to the taste, sweet with the punch, Chocolate Lover's got your back."
);

crazyColombian = new coffeeProduct(
    "Crazy Colombian", 
    "16.99", 
    1, 
    "nutty / smoky / caramel", 
    "Medium", "Coasta Rica", "French Press", "Time for a taste. This is kind of brew that’s made for sharing and spilling some crazy stories. Full bodied, complex & smooth with notes of hazelnuts, smoky marshmellows, &  a sweet caramel drizzle. FOMO in a cup. Once you take a sip, you'll go crazy and never go back"
);

let products = {chocolateLover, crazyColombian};

//changes the information on the individual product page
function individualProduct(coffeeProduct) {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = coffeeProduct.coffee;
    console.log(h1);

    let h2 = document.getElementsByTagName('h2')[0];
    h2.innerHTML = coffeeProduct.flavor;
    console.log(h2);

    let roast = document.getElementById('flavor_roast');
    roast.innerHTML = coffeeProduct.roast;

    let origin = document.getElementById('flavor_origin');
    origin.innerHTML = coffeeProduct.origin;

    let brewing = document.getElementById('flavor_brewing');
    brewing.innerHTML = coffeeProduct.brewing;

    let description = document.getElementById('flavor_description');
    description.innerHTML = coffeeProduct.description;

    let price = document.getElementById('individualproduct_price');
    description.innerHTML = coffeeProduct.price;
} */

// changes the cart icon to the number of items added
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

function addProduct(productName, totalPrice) {
    cart.push({productName, totalPrice});
    console.log(cart);

    // let product = document.createElement("p");
    // product.innerText = productName;
    // console.log(product);
    // const name = document.createTextNode(productName);
    // let curCart = document.getElementById('update_cart');
    // curCart.appendChild(product);
    // console.log(name);
    // curCart.appendChild(name);

    // var select = document.getElementById('quantity');
    // var quantity = select.options[select.selectedIndex].value;    price = quantity.parseInt();
    // console.log(quantity);
    // quantity *= 16.99;
    // console.log(quantity);
    // totalString = document.getElementById('currrent_price');
    // totalString.innerHTML = total;
}
let cart = [];

function updateCart(productName) {
    console.log("made it");
    let product = document.createElement("p");
    product.innerText = productName;
    console.log(product);
    let curCart = document.getElementById('update_cart');
    curCart.appendChild(product);
    
    // for (let i = 0; i < cart.length; i+= 1) {
    //     console.log("inside loop");
    //     let product = document.createElement("p");
    //     product.innerText = cart[i][0];
    //     console.log(product);
    //     let curCart = document.getElementById('update_cart');
    //     curCart.appendChild(product);
    //   }
}

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




// https://stackabuse.com/storing-data-in-the-browser-with-localstorage/
// https://gomakethings.com/how-to-update-localstorage-with-vanilla-javascript/ 

let chocolateLover = {
	coffee : 'Chocolate Lover',
    quantity : '1',
    price : '14.99',
    ground: 'Whole Bean',
    flavor : 'sweet / nippy / smoky',
    roast : 'Light',
    origin : 'South America',
    brewing : 'Espresso',
    description : 'Time for a taste. This is kind of brew that’s made for sharing and spilling some crazy stories. Full bodied, complex & smooth with notes of hazelnuts, smoky marshmellows, &  a sweet caramel drizzle. FOMO in a cup. Once you take a sip, you will go crazy and never go back'
};

let crazyColombian = {
	coffee : 'Crazy Colombian',
    quantity : '1',
    price : '16.99',
    ground: 'Whole Bean',
    flavor : 'nutty / smoky / caramel',
    roast : 'Medium',
    origin : 'Costa Rica',
    brewing : 'French Press',
    description : 'Perfect for when you need that extra kick to wake up, or if you are one of those badasses that really enjoy the taste of strong black coffee. Strong to the taste, sweet with the punch, Chocolate Lovers got your back'
};

// @purpose Visual change of cart icon according to user preference
// @called 'Add to cart' button is pressed
// TODO: need to change icon for when multiple items are pressed and switched to product page in between
function showCart() {
    var added = document.getElementById('individualproduct_checkout');
    added.innerHTML = "Added to cart!";
    var select = document.getElementById('quantity');
    var value = select.options[select.selectedIndex].value;

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
    return value;
}

// @purpose Adds updated product object to local storage
// @called 'Add to cart' button is pressed
function addProduct(productName, productObject) {
    localStorage.setItem(productName, JSON.stringify(productObject));

    let coffeeProfile = localStorage.getItem(productName);
    let savedCoffee = JSON.parse(coffeeProfile);
    console.log("Product name: ", savedCoffee.coffee);
    console.log("Product price: ", savedCoffee.price);
    console.log("Product quantity: ", savedCoffee.quantity);
    console.log("Product ground: ", savedCoffee.ground);
}

// @purpose Visual change of price according to user preference
// @return New price according to quantity value
// @called 'Quantity' value is changed
function showPrice16() {
    var select = document.getElementById('quantity');
    var quantity = select.options[select.selectedIndex].value;

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

// @purpose Update object in localStorage according to user preference
// @called When any value is changed
function updateObject(productName, productObject) {
    localStorage.setItem(productName, JSON.stringify(productObject));
}

// @purpose Updates object value of quantity according to user preference
// @called 'Quantity' value is changed
function setQuantity(productObject) {
    var select = document.getElementById('quantity');
    var quantity = select.options[select.selectedIndex].value;
    productObject.quantity = quantity;
    updateObject(productObject.coffee, productObject);
}

// @purpose Updates object value of total price according to user preference
// @called 'Quantity' value is changed
function setPrice16(productObject) {
    var price = showPrice16();
    productObject.price = price;
    updateObject(productObject.coffee, productObject);
}

// @purpose Updates object value of total price according to user preference
// @called 'Quantity' value is changed
function setPrice14(productObject) {
    var price = showPrice14();
    productObject.price = price;
    updateObject(productObject.coffee, productObject);
}

// @purpose Updates object value of ground according to user preference
// @called 'Ground' value is changed
function setGround(productObject) {
    var select = document.getElementById('ground');
    var ground = select.options[select.selectedIndex].value;

    if (ground == 1) {
        productObject.ground = 'Whole Bean';
        updateObject(productObject.coffee, productObject);
    }

    else if (ground == 2) {
        productObject.ground = 'Fresh Ground';
        updateObject(productObject.coffee, productObject);
    }
}

// @purpose Visual change of price according to user preference
// @return New price according to quantity value
// @called 'Quantity' value is changed
function showPrice14() {
    var select = document.getElementById('quantity');
    var quantity = select.options[select.selectedIndex].value;

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

// @purpose Updates HTML with user preferences of added cart items
// @called 'Checkout.html' page is loaded
function showProducts() {
    for (let i = 0; i < localStorage.length; i+= 1) {
        let storedCoffee = localStorage.key(i);
        console.log(storedCoffee);
        var coffee = JSON.parse(localStorage.getItem(storedCoffee));
        console.log(coffee);

        var coffeeNameQuantity = document.createElement('p');
        var coffeeNameQuantityValues = document.createTextNode(coffee.coffee + " x " + coffee.quantity);

        var span = document.createElement('span');
        span.style.fontWeight = "bold";
        span.appendChild(document.createTextNode(coffee.price));

        var ul = document.createElement('ul');
        li = document.createElement('li'); 
        li.appendChild(document.createTextNode(coffee.ground));
        ul.appendChild(li);

        coffeeNameQuantity.appendChild(coffeeNameQuantityValues);

        var element = document.getElementById("current_cart");
        element.appendChild(coffeeNameQuantity);  
        element.appendChild(span);  
        element.appendChild(ul);
    }
}

// @purpose Updates HTML with user preferences of total
// @called 'Checkout.html' page is loaded
// TODO: change totals for item prices to int
function getTotal() {
    var subtotal = 0.00;
    for (let i = 0; i < localStorage.length; i+= 1) {
        let storedCoffee = localStorage.key(i);
        console.log(storedCoffee);
        var coffee = JSON.parse(localStorage.getItem(storedCoffee));
        var stringTotal = coffee.price;
        var total = parseInt(stringTotal);
        subtotal += total;
        console.log(subtotal);
    }

    var spanSubTotal = document.createElement('span');
    var stringSubTotal = subtotal.toString();
    spanSubTotal.style.fontWeight = "bold";
    spanSubTotal.appendChild(document.createTextNode(stringSubTotal));

    var total = subtotal + 5.99;
    var spanTotal = document.createElement('span');
    var stringTotal = total.toString();
    console.log(stringTotal);
    spanTotal.style.fontWeight = "bold";
    spanTotal.appendChild(document.createTextNode(stringTotal));

    var element = document.getElementById('subtotal');
    element.appendChild(spanSubTotal);  

    var element = document.getElementById('total');
    element.appendChild(spanTotal);  
}

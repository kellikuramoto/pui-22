let chocolateLover = {
	coffee : 'Chocolate Lover',
    quantity : '1',
    price : '14.99',
    ground: 'Whole Bean',
};

let crazyColombian = {
	coffee : 'Crazy Colombian',
    quantity : '1',
    price : '16.99',
    ground: 'Whole Bean',
};

let ecuadorianEcstatic = {
	coffee : 'Ecuadorian Ecstatic',
    quantity : '1',
    price : '16.99',
    ground: 'Whole Bean',
};

let grandpaJoe = {
	coffee : 'Grandpa Joe',
    quantity : '1',
    price : '12.99',
    ground: 'Whole Bean',
};

let turkishDelight = {
	coffee : 'Turkish Delight',
    quantity : '1',
    price : '16.99',
    ground: 'Whole Bean',
};

let electricEthiopian = {
	coffee : 'Electric Ethiopian',
    quantity : '1',
    price : '16.99',
    ground: 'Whole Bean',
};

let nightOwl = {
	coffee : 'Night Owl',
    quantity : '1',
    price : '12.99',
    ground: 'Whole Bean',
};

let purelyPeruvian = {
	coffee : 'Purely Peruvian',
    quantity : '1',
    price : '14.99',
    ground: 'Whole Bean',
};

// @purpose Set up localStorage key value pair for total items
// @called onload of index.html
function setCart() {
    localStorage.setItem('Total Products', '0');
}

// @purpose Visual change of cart icon according to user preference
// @called 'Add to cart' button is pressed
function showCart() {
    var added = document.getElementById('individualproduct_checkout');
    added.innerHTML = "Added to cart!";

    var select = document.getElementById('quantity');
    var selected = select.options[select.selectedIndex].value;

    var stringTotalProducts = localStorage.getItem('Total Products');
    var intTotalProducts = parseInt(stringTotalProducts);

    var intQuantity = parseInt(selected);
    var value = intTotalProducts + intQuantity;
    localStorage.setItem('Total Products', value);

    if (value == '1') {
        document.getElementById("cart_img").src = 'images/one.png';
    }

    if (value == '2') {
        document.getElementById("cart_img").src = 'images/two.png';
    }

    if (value == '3') {
        document.getElementById("cart_img").src = 'images/three.png';
    }

    if (value == '4') {
        document.getElementById("cart_img").src = 'images/four.png';
    }

    if (value == '5') {
        document.getElementById("cart_img").src = 'images/five.png';
    }

    if (value == '6') {
        document.getElementById("cart_img").src = 'images/six.png';
    }

    if (value == '7') {
        document.getElementById("cart_img").src = 'images/seven.png';
    }

    if (value == '8') {
        document.getElementById("cart_img").src = 'images/eight.png';
    }

    if (value == '9') {
        document.getElementById("cart_img").src = 'images/nine.png';
    }
    return value;
}

// @purpose Visual change of cart icon according to user preference
// @called onload of index.html, checkout.html, and individual product pages
function showCart2() {
    var value = localStorage.getItem('Total Products');

    if (value == '1') {
        document.getElementById("cart_img").src = 'images/one.png';
    }

    if (value == '2') {
        document.getElementById("cart_img").src = 'images/two.png';
    }

    if (value == '3') {
        document.getElementById("cart_img").src = 'images/three.png';
    }

    if (value == '4') {
        document.getElementById("cart_img").src = 'images/four.png';
    }

    if (value == '5') {
        document.getElementById("cart_img").src = 'images/five.png';
    }

    if (value == '6') {
        document.getElementById("cart_img").src = 'images/six.png';
    }

    if (value == '7') {
        document.getElementById("cart_img").src = 'images/seven.png';
    }

    if (value == '8') {
        document.getElementById("cart_img").src = 'images/eight.png';
    }

    if (value == '9') {
        document.getElementById("cart_img").src = 'images/nine.png';
    }
    return value;
}

// @purpose Updates object value of total price according to user preference
// @called 'Quantity' value is changed
function setPrice12(productObject) {
    var price = showPrice12();
    productObject.price = price;
    updateObject(productObject.coffee, productObject);
}

// @purpose Visual change of price according to user preference
// @return New price according to quantity value
// @called 'Quantity' value is changed
function showPrice12() {
    var select = document.getElementById('quantity');
    var quantity = select.options[select.selectedIndex].value;

    if (quantity == 1) {
        newPrice = '12.99';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 2) {
        newPrice = '25.98';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 3) {
        newPrice = '38.97';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 4) {
        newPrice = '51.96';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 5) {
        newPrice = '64.95';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }
}

// @purpose Updates object value of total price according to user preference
// @called 'Quantity' value is changed
function setPrice14(productObject) {
    var price = showPrice14();
    productObject.price = price;
    updateObject(productObject.coffee, productObject);
}

// @purpose Visual change of price according to user preference
// @return New price according to quantity value
// @called 'Quantity' value is changed
function showPrice14() {
    var select = document.getElementById('quantity');
    var quantity = select.options[select.selectedIndex].value;

    if (quantity == 1) {
        newPrice = '14.99';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 2) {
        newPrice = '29.98';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 3) {
        newPrice = '44.97';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 4) {
        newPrice = '59.96';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 5) {
        newPrice = '74.95';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }
}

// @purpose Updates object value of total price according to user preference
// @called 'Quantity' value is changed
function setPrice16(productObject) {
    var price = showPrice16();
    productObject.price = price;
    updateObject(productObject.coffee, productObject);
}

// @purpose Visual change of price according to user preference
// @return New price according to quantity value
// @called 'Quantity' value is changed
function showPrice16() {
    var select = document.getElementById('quantity');
    var quantity = select.options[select.selectedIndex].value;

    if (quantity == 1) {
        newPrice = '16.99';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 2) {
        newPrice = '33.98';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 3) {
        newPrice = '50.97';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 4) {
        newPrice = '67.96';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
        return newPrice;
    }

    if (quantity == 5) {
        newPrice = '84.95';
        price = document.getElementById("individualproduct_price");
        price.innerHTML = '$' + newPrice;
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

// @purpose Updates HTML with user preferences of added cart items
// @called 'Checkout.html' page is loaded
function showProducts() {
    for (let i = 0; i < localStorage.length; i+= 1) {
        let storedCoffee = localStorage.key(i);
        if (storedCoffee == 'Total Products') {
            continue
        }
        else {
        var coffee = JSON.parse(localStorage.getItem(storedCoffee));

        var coffeeNameQuantity = document.createElement('p');
        var coffeeNameQuantityValues = document.createTextNode(coffee.coffee + " x " + coffee.quantity);
        
        var productTotal = document.createElement('p');
        var dollar = document.createTextNode('$'); 
        productTotal.appendChild(dollar);
        productTotal.style.fontWeight = "bold";
        var productPrice = document.createElement('span');
        productPrice.style.fontWeight = "bold";
        productPrice.appendChild(document.createTextNode(coffee.price));
        productTotal.appendChild(productPrice);

        var ul = document.createElement('ul');
        li = document.createElement('li'); 
        li.appendChild(document.createTextNode(coffee.ground));
        ul.appendChild(li);

        coffeeNameQuantity.appendChild(coffeeNameQuantityValues);

        var element = document.getElementById("current_cart");
        element.appendChild(coffeeNameQuantity);  
        element.appendChild(productTotal);  
        element.appendChild(ul);
        }
    }
}

// @purpose Updates HTML with user preferences of total
// @called 'Checkout.html' page is loaded
function getTotal() {
    var subtotal = 0.00;
    for (let i = 0; i < localStorage.length; i+= 1) {
        let storedCoffee = localStorage.key(i);
        if (storedCoffee == 'Total Products') {
            continue
        }
        else {
        var coffee = JSON.parse(localStorage.getItem(storedCoffee));
        var stringTotal = coffee.price;
        var subtotalFloat = parseFloat(stringTotal);
        subtotal += subtotalFloat;
        }
    }

    var total = subtotal + 5.99;
    subtotal = subtotal.toFixed(2);
    total = total.toFixed(2);

    var spanSubTotal = document.createElement('span');
    var stringSubTotal = subtotal.toString();
    spanSubTotal.style.fontWeight = "bold";
    spanSubTotal.appendChild(document.createTextNode(stringSubTotal));

    var spanTotal = document.createElement('span');
    var stringTotal = total.toString();
    spanTotal.style.fontWeight = "bold";
    spanTotal.appendChild(document.createTextNode(stringTotal));

    var elementSubTotal = document.getElementById('subtotal');
    elementSubTotal.appendChild(spanSubTotal);  
    var elementTotal = document.getElementById('total');
    elementTotal.appendChild(spanTotal);  
}

// @purpose Updates products shown according to filter
// @called filter buttons are selected
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

function activeButton() {
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
    }
}
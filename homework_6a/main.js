function checkout() {
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
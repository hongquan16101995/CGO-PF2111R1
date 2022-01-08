let cartProduct = []

function displayCart() {
    let data = "<table><tr><td><b>Name</b></td>"
        + "<td><b>Brand</b></td>"
        + "<td><b>Color</b></td>"
        + "<td><b>Price</b></td>"
        + "<td><b>Quantity</b></td>"
        + "<td><b>Description</b></td>"
        + "<td id='amount'><b>" + cartProduct.length + " products</b></td></tr>"
    for (let i = 0; i < cartProduct.length; i++) {
        data += "<tr>"
        data += "<td>" + cartProduct[i].name + "</td>"
        data += "<td>" + cartProduct[i].brand + "</td>"
        data += "<td>" + cartProduct[i].color + "</td>"
        data += "<td>" + cartProduct[i].price + "</td>"
        data += "<td><input id= '" + i + "' type='text' value=" + 1 + "></td>"
        data += "<td><button onclick='plusQuantity(" + i + ")''>+</button></td>"
        data += "<td><button onclick='deleteProductInCart(" + i + ")''>Delete</button></td>"
        data += "</tr>"
    }
    data += "<table>"
    document.getElementById("cart").innerHTML = data
}

function plusQuantity(index) {
    let val = document.getElementById(index).value
    val++
    document.getElementById(index).value = val
}

function deleteProductInCart(index) {
    if (confirm("Bạn có chắc chắn xóa sản phẩm này?")) {
        cartProduct.splice(index, 1)
    }
    displayCart()
}

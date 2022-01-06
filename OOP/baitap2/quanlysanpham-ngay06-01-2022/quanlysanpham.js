let arrayProduct = []
arrayProduct.push(new Product("Iphone 13", "Apple", "Pink", 50000000, 40, "Rất đắt!!!"))
arrayProduct.push(new Product("Iphone 13", "Apple", "Pink", 50000000, 40, "Rất đắt!!!"))
let value

function displayProduct() {
    let data = "<table><tr><td><b>Name</b></td>" 
                + "<td><b>Brand</b></td>"
                + "<td><b>Color</b></td>"
                + "<td><b>Price</b></td>"
                + "<td><b>Quantity</b></td>"
                + "<td><b>Description</b></td>"
                + "<td id='amount'><b>"+ arrayProduct.length +" products</b></td></tr>"
    for (let i = 0; i < arrayProduct.length; i++) {
        data += "<tr>"
        data += "<td>"+ arrayProduct[i].name +"</td>"
        data += "<td>"+ arrayProduct[i].brand +"</td>"
        data += "<td>"+ arrayProduct[i].color +"</td>"
        data += "<td>"+ arrayProduct[i].price +"</td>"
        data += "<td>"+ arrayProduct[i].quantity +"</td>"
        data += "<td>"+ arrayProduct[i].description +"</td>"
        data += "<td><button onclick='editProduct("+ i +")''>Edit</button></td>"
        data += "<td><button onclick='deleteProduct("+ i +")''>Delete</button></td>"
        data += "</tr>"
    }
    data += "<table>"
    document.getElementById("result").innerHTML = data
}

displayProduct()

function addProduct() {
    let name = document.getElementById("addName").value
    let price = document.getElementById("addPrice").value
    arrayProduct.push(new Product(name, "Apple", "Red", price, 40, "abc"))
    document.getElementById("addName").value = ""
    document.getElementById("addPrice").value = ""
    displayProduct()
}

//c1: sử dụng prompt
// function editProduct(index) {
//     let newProduct = prompt("Nhập sản phẩm bạn muốn sửa: ", arrayProduct[index])
//     arrayProduct[index] = newProduct
//     displayProduct()
// }

//c2: sử dụng input để edit
function editProduct(index) {
    document.getElementById("editName").value = arrayProduct[index].name
    document.getElementById("editPrice").value = arrayProduct[index].price
    value = index
}

function replace() {
    let editName = document.getElementById("editName").value
    let editPrice = document.getElementById("editPrice").value
    editProduct = arrayProduct[value]
    editProduct.name = editName
    editProduct.price = editPrice
    document.getElementById("editName").value = ""
    document.getElementById("editPrice").value = ""
    displayProduct()
}

function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn xóa sản phẩm này?")) {
        arrayProduct.splice(index, 1)
    }
    displayProduct()
}
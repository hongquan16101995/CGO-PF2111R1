let arrayProduct = ["Nokia", "Iphone", "Samsung"]
let value

function displayProduct() {
    let data = "<table><tr><td colspan='2'><b>Product Name</b></td><th id='amount'>"+ arrayProduct.length +" products</th></tr>"
    for (let i = 0; i < arrayProduct.length; i++) {
        data += "<tr>"
        data += "<td>"+ arrayProduct[i] +"</td>"
        data += "<td><button onclick='editProduct("+ i +")''>Edit</button></td>"
        data += "<td><button onclick='deleteProduct("+ i +")''>Delete</button></td>"
        data += "</tr>"
    }
    data += "<table>"
    document.getElementById("result").innerHTML = data
}

displayProduct()

function addProduct() {
    let product = document.getElementById("add").value
    arrayProduct.push(product)
    document.getElementById("add").value = ""
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
    document.getElementById("edit").value = arrayProduct[index]
    value = index
}

function replace() {
    let editProduct = document.getElementById("edit").value
    arrayProduct[value] = editProduct
    document.getElementById("edit").value = ""
    displayProduct()
}

function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn xóa sản phẩm này?")) {
        arrayProduct.splice(index, 1)
    }
    displayProduct()
}
var listProducts = ['Sony', 'Samsung', 'Nokia', 'Xiaomi', 'Apple', 'Oppo'];

function displayProducts() {
    let sout = "";
    for (let i = 0; i < listProducts.length; i++) {
        if (i % 2 === 0) {
            sout += '    <tr>\n' +
                '        <td class="space">' + listProducts[i] + '</td>\n' +
                '        <td class="spacetd"><button onclick="editProducts(' + i + ')">Edit</button></td>\n' +
                '        <td><button onclick="deleteProducts(' + i + ')">Delete</button></td>\n' +
                '<td><button onclick="edit('+i+')">Edit2</button></td>\n' +
                '        <td></td>\n' +
                '    </tr>'
        } else {
            sout += '    <tr class="colorrow">\n' +
                '        <td class="space">' + listProducts[i] + '</td>\n' +
                '        <td class="spacetd"><button onclick="editProducts(' + i + ')">Edit</button></td>\n' +
                '        <td><button onclick="deleteProducts(' + i + ')">Delete</button></td>\n' +
                '<td><button onclick="edit('+i+')">Edit2</button></td>\n' +
                '        <td></td>\n' +
                '    </tr>'
        }
    }
    document.getElementById('products').innerHTML = sout;
    document.getElementById('product').value = "";
    document.getElementById('sum').innerHTML = listProducts.length + ' products';
}

displayProducts();

function addProducts() {
    let add = document.getElementById("product").value;
    if (add) {
        listProducts.push(add);
    } else {
        alert('Xin vui lòng nhập hàng muốn thêm:');
    }
    displayProducts();
}

function editProducts(index) {
    let change = confirm("Sửa thông tin sản phẩm " + listProducts[index] + " thành:");
    let a;
    if (change) {
        a=prompt('Sử thông tin sản phẩm:');
    } else {
        a=listProducts[index];
    }
    listProducts[index]=a;
    displayProducts();
}

function deleteProducts(index) {
    listProducts.splice(index, 1);
    displayProducts();
}
let index2=-1;
function edit(index) {
document.getElementById('product').value=listProducts[index];
document.getElementById('edit2').style.display='block';
document.getElementById('edit1').style.display='none';
    index2=index;
}
function edit2() {
    let b= document.getElementById('product').value;
    listProducts[index2]= b;
    document.getElementById('edit2').style.display='none';
    document.getElementById('edit1').style.display='block';
    displayProducts()
}


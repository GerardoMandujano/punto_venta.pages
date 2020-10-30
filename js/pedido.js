var nombreprod = document.getElementById("nombre");
var precioprod = document.getElementById("precio");
var cantidadprod = document.getElementById("cantidad");
var btnaniadir = document.getElementById("aniadir");
var listaprod = document.getElementById("lista-pedido");
var divtotal = document.getElementById("divtotal");
var catalogo = [
    producto1 = {
        nombre: "",
        precio: 0,
        cantidad: 0
    },

];


var contador = 1;



var subtotal = 0;
var total = 0;

function Add() {
    catalogo.push({
        nombre: nombreprod.value,
        precio: precioprod.value,
        cantidad: cantidadprod.value,

    });
    subtotal = (parseFloat(precioprod.value) * parseInt(cantidadprod.value));

    total += subtotal

    console.log(total);

    crearLista(nombreprod.value, precioprod.value, cantidadprod.value, subtotal, total);
    listaprod.style.display = "block";


    console.log(catalogo);
    nombreprod.value = "";
    precioprod.value = "";
    cantidadprod.value = "";


}


function crearLista(producto, precio, cantidad, subtotal, totalneto) {
    let tr1 = document.createElement('tr');
    tr1.id = "elementos-lista";
    let td1 = document.createElement('td');
    td1.textContent = contador;
    let td2 = document.createElement('td');
    td2.textContent = producto;
    let td3 = document.createElement('td');
    td3.textContent = precio;
    let td4 = document.createElement('td');
    td4.textContent = cantidad;
    let td5 = document.createElement('td');
    td5.textContent = subtotal;
    let total = document.createElement('h2');
    total.textContent = totalneto;

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    tr1.appendChild(td5);
    listaprod.appendChild(tr1);

    var lista = `

         <tr id="elementos-lista">
         <td id ="lista-total">Total:${totalneto}</td>
        
         </tr>
          `;
    divtotal.innerHTML = lista;
    contador++;
}

// function crearLista(producto, precio, cantidad, subtotal) {
//     var lista = `

//      <tr id="elementos-lista">
//      <td>${contador}</td>
//      <td>${producto}</td>
//      <td>${precio}</td>
//      <td>${cantidad}</td>
//      <td>${subtotal}</td>
//      <br>
//      </tr>
//       `;
//     listaprod.innerHTML += lista;
//     contador++;
// }
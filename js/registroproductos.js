var nombreprod = document.getElementById('producto');
var departamentoprod = document.getElementById("departamento");
var precioprod = document.getElementById("precio");
var listaprod = document.getElementById("lista");

var catalogo = [
    producto1 = {
        nombre: "",
        departamento: "",
        precio: 0
    },

];
var contador = 1;

function validar() {

    catalogo.push({
        nombre: nombreprod.value,
        departamento: departamentoprod.value,
        precio: precioprod.value,

    });
    crearLista(nombreprod.value, departamentoprod.value, precioprod.value);
    listaprod.style.display = "block";




    console.log(catalogo);
    nombreprod.value = "";
    departamentoprod.value = "";
    precioprod.value = "";
}

function crearLista(producto, departamento, precio) {
    var lista = `
    
     <tr id="elementos-lista">
     <td>${contador}</td>
     <td>${producto}</td>
     <td>${departamento}</td>
     <td>${precio}</td>
     <br>
     </tr>
                   `;
    listaprod.innerHTML += lista;
    contador++;
}
var catalogo = [
    producto1 = {
        nombre: "Closet",
        departamento: "muebles",
        precio: 15500
    },
    producto2 = {
        nombre: "Closet",
        departamento: "muebles",
        precio: 15500
    },
    producto3 = {
        nombre: "Closet",
        departamento: "muebles",
        precio: 15500
    },
    producto4 = {
        nombre: "Closet",
        departamento: "muebles",
        precio: 15500
    }
];


console.log(catalogo);
catalogo.push({
    nombre: "Agregado",
    departamento: "hogar",
    precio: 600,

});
catalogo.push({
    nombre: "Agregado",
    departamento: "hogar",
    precio: 600
});
console.log(catalogo);

class Producto {

    nombre;
    existencia;

    constructor(nombre, existencia) {
        this.nombre = nombre
        this.existencia = existencia;
    }
    existencia(existencia) {
        this.existencia = existencia;

    }
    existencia() {
        return this.existencia;
    }

    nombreProducto(nombre) {
        this.nombreProducto = nombre;

    }
    nombreProducto() {
        return this.nombreProducto;
    }



    get Datos() {
            return this.imprimir();
        }
        // get Validar(producto) {
        //     return this.verificarPedido(producto);
        // }




    imprimir() {
        console.log("Nombre:" +
            this.nombreProducto + "  cantidad:" + this.existencia);
    };


    verificarPedido(nombre) {

        if (nombre) {
            return "Existe";
        } else {
            return "No existe";
        }




    }
}

function main() {
    var p1 = new Producto("Algo mas", 56);
    p1.nombreProducto = "Algo nuevo";
    p1.existencia = 256;
    p1.Datos;
    var p2 = new Producto();
    var p3 = new Producto();
    var p4 = new Producto();

    let listadeproductos = [p1, p2, p3, p4];
    console.log("Cantidad de productos:" + listadeproductos.length);
}
main();
var x = eval(new String(producto1.nombre));
console.log(x);
console.log(isNaN(producto1.precio));
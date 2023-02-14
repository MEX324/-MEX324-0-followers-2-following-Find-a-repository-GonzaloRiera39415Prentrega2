
//ALTA DE PRODUCTOS

class Producto {
    constructor (nombre , precio , stock , leyenda , numcartas){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.leyenda = leyenda;
        this.numcartas = numcartas;

    }

    get_datos () {
        console.log ("<--------------->");
        console.log (this.nombre);
        console.log ("Precio:", this.precio);
        console.log ("Stock:", this.stock);
        console.log ( this.leyenda);
        console.log ("Cantidad de cartas:", this.numcartas);
        console.log ("<--------------->");
    }
    get_stock () {
        if (this.stock <= 0) {
            return false
        }
        else {
            return true
    }
}

venta_stock(cantidad){//Verifico unidades solicitadas <= Stock
 if(this.stock >= cantidad){
    this.stock = this.stock - cantidad;
    return true;
 }
 else{
    return false
 }
}

}

let lista_productos = [];

lista_productos.push( new Producto("Mazo Inicial - Escudo Real" , 10000 ,5 ,"Comanda las legiones del Rey Graden y protege al reino de Berin" , 60));
lista_productos.push( new Producto("Mazo Inicial - La espada de arena" , 10000 ,13 , "Lidera la revolucion de Fajid y derroca la tirania con tus tropas de desertores", 60));
lista_productos.push( new Producto("Expansion - Nobles y Bandidos" , 1000 ,20 , "En tiempos de guerra quien pueda alzar una lanza es util, no importa de que cuna provenga" , 5));
lista_productos.push( new Producto("Expansion - Intrigas de la corte" , 1000 ,0, "La pluma y la palabra siempre fueron mas certeras que las espadas", 5));

 

//RENDER DE PRODUCTOS


console.log ("Lista de productos");

for( let producto of lista_productos) {
    producto.get_datos();
}


//SIMULADOR DE COMPRA


function buscar_producto ( producto ){
    return producto.nombre == compra_usuario
}

let compra_usuario = prompt("Ingrese el nombre del producto que quiere comprar");

let resultado_busqueda = lista_productos.find ( buscar_producto);

if (resultado_busqueda != undefined){
    //El producto esta en la base de datos

if ( resultado_busqueda.get_stock()){ //cheque STOCK y vendo el producto

    let unidades = prompt(`Tenemos ${resultado_busqueda.stock} en las bodegas. ¿Cuantas quieres?`);
    if (resultado_busqueda.venta_stock(unidades)){
        console.log(`Gracias por comprar ${unidades} de ${resultado_busqueda.nombre}. Disfruta tus aventuras en el mundo de Lairen`)
    }
    else{
        console.log("No se puede realizar la compra")
        console.log("Stock disponible: ", resultado_busqueda.stock )
    }

}
else{
    console.log(`No hay suficientes ${resultado_busqueda.nombre} en las bodegas aún, intenta luego o contacta a nuestros amos`);
}

}
else {
    console.log ("No se encontro el producto: ", compra_usuario);
}
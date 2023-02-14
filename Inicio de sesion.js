console.log ("Bienvenido a la tienda oficial de Lairen TCG")

//LOGIN USUARIO

class Usuario {
    constructor (nombre , apellido , correo , contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.contraseña = contraseña;
    }


    validar_contraseña (clave){
        if(this.contraseña == clave){
           return true;
        }
        else{
           return false
        }
       }


}

let usuario_registrados = [];

usuario_registrados.push( new Usuario("Gonzalo" , "Riera" , "gonzariera324@gmail.com", "Baldur"));
usuario_registrados.push( new Usuario("Argelis" , "Molina" , "Arge@gmail.com", "ArgE"));
usuario_registrados.push( new Usuario("Eddi" , "Carbajal" , "Edgardito@gmail.com", "2758WACHO"));



function login_usuario (usuario) {
    return usuario.correo == correo_usuario
  
}

let correo_usuario = prompt("Ingresa tu Correo")

let resultado_busquedaDatos = usuario_registrados.find(login_usuario);

if (resultado_busquedaDatos != undefined){

    let claveUsuario = prompt("Ingrese su contraseña");
    if (resultado_busquedaDatos.validar_contraseña(claveUsuario)){
        console.log("Disfruta tus aventuras en Lairen");
        window.location.href = "tienda.html";
    }
    else{
        alert("Contraseña Incorrecta");
    }

}
else {
    alert ("Tu correo es incorrecto o no esta registrado");
    
}





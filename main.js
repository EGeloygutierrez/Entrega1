let nombre = prompt ("ingrese su nombre aqui")

let CheeseBurguer = 5000;
let BlueCheese = 5500;
let AvocadoBurguer = 6000;
let MustardOnion = 7000;

alert ("Bienevenido" + nombre );

let pedido = prompt ("De que te antojaste? Te gusto algo? SI? NO?");

if ((pedido === "no") || (pedido === "No") || (pedido === "NO") || (pedido === "nO")){
    alert ("Los esperamos nuevamente con nuevos sabores");
} else {
    let orden = prompt ("Ingrese su pedido: CheeseBurguer / BlueCheese / AvocadoBurguer / MustardOnion");

    switch (orden){
        case "CheeseBurguer":
            alert ("Gracias por su pedido. Su total es de $ " + CheeseBurguer);

break;

        case "BlueCheese":
            alert ("Gracias por su pedido. Su total es de $ " + BlueCheese);

break;

        case "AvocadoBurguer":
            alert ("Gracias por su pedido. Su total es de $ " + AvocadoBurguer);

break;

        case "MustardOnion":
            alert ("Gracias por su pedido. Su total es de $ " + MustardOnion)

} 
}

function agradecer (){
    alert ( nombre + " , ya estamos procesando su pedido. Se encuentra en preparacion. Ponto nos comunicaremos con usted.");

}
agradecer ()

// alert("Bienvenido a Recargas Online");

//DECLARACION DE VARIABLES
let monto;
let opcion;
// let numero = parseInt(prompt("Por favor, ingresa tu numero telefonico"));
let saldo = 0;
let prestamo = 0;
let deuda = 0;


//FUNCIONES


function validarSaldo(saldo, deuda){
  if( saldo < 0 ){
    alert("No tiene saldo, debe recargar");
  } else {
    alert("Su saldo es:$ " + saldo );
    alert("Tiene una deuda de:$  "+ deuda);
  }
}
function recargaSos(prestamo, deuda){
  
  switch(prestamo){
     case 1: 
         saldo = saldo + 250;
         deuda = deuda + 250;
     break;
     case 2: 
     saldo = saldo + 500;
     deuda = deuda + 500;
     break;
     case 3: 
     saldo = saldo + 750;
     deuda = deuda + 750;
     break;
     case 4: 
     saldo = saldo + 1000;
     deuda = deuda + 1000;
     break; 
     default: 

     break;
}
 }

 // OBJETOS
 
 
  // const nombre = prompt("Ingresa tu Nombre");
  // const apellido = prompt("Ingresa tu apellido");
  // const email = prompt("Ingresa tu email");
  // const personal = {
  //   nombre: nombre,
  //   apellido: apellido,
  //   email: email
  //  }






  
// Obtengo el formulario
  const formulario = document.getElementById('miFormulario');
  const resultadoElemento = document.getElementById('resultado');
  const formularioContainer = document.getElementById('formularioContainer');
  const resultadoContainer = document.getElementById('resultadoContainer');

// Agrego un evento 'submit' al formulario
formulario.addEventListener('submit', function(event) {
    // Detengo el comportamiento predeterminado del envío del formulario
    event.preventDefault();
    const inputNumero = document.getElementById("numero");
    const inputNombre = document.getElementById('nombre');
    const inputApellido = document.getElementById('apellido');
    const inputEmail = document.getElementById('email');




    // Obtengo el valor del input por SEPARADO
    const numero = inputNumero.value;
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const email = inputEmail.value;


    // AGREGO Y MUESTRO LOS DATOS
      resultadoElemento.innerHTML =
        'Nombre: ' + nombre + '<br>' +
        'Apellido: ' + apellido + '<br>' +
        'Email: ' + email + '<br>' +
        'Número: ' + numero;
     
    inputNumero.value=""
    inputNombre.value = "";
    inputApellido.value="";
    inputEmail.value = "";

    setTimeout(function() {
      window.location.href = 'page2.html'; // Cambia "otraParte" con el ID o nombre del elemento al que deseas redireccionar
  }, 3000);
});

// ARRAYS y METODOS

   const compania = [
      {comp: "Movistar"},
      {comp: "Claro"},
      {comp: "Tuenti" },
      {comp: "Personal" }
   ];

   const companiaResultado = compania.find((el) => el.comp === "Movistar")


// MENU DE OPCIONES Y OPERACIONES
// do{
//     opcion = parseInt(prompt("Selecciona una opción:\n1. Recargar \n2. Consultar \n3. Prestamo \n4. Datos del Titular(Se muestran por consola)\n5. Buscar compañias \n6. Salir "));
//     switch (opcion) {
//         case 1:
        
//          monto = parseInt(prompt("Bienvenido " + numero + " ingrese el monto a recargar(Mayor o igual a 100): "));
//          saldo = saldo + monto;
//           if(monto <=100){
//             alert("Monto incorrecto, intentelo nuevamente")
//             monto = prompt("Bienvenido " + numero + " ingrese el monto a recargar(Mayor o igual a 100): ");
//             saldo = saldo + monto;
//           }
//           pago = prompt("Ingrese como va a recargar:\n 1. Tarjeta de Credito. \n2. Tarjeta de Debito");
//           if (pago === "1"){
//             alert("Usted recargo: "+ monto + " con tarjeta de credito. Obtiene un regalo de $200" );
//             saldo = saldo + 200;
//           } else {
//             alert("Usted recargo: "+ monto + " con tarjeta de debito. Obtiene un regalo de $150" );
//             saldo = saldo + 150;
//           }
//           break;
//         case 2:
//           validarSaldo(saldo,deuda);
//           break;
//         case 3:
//           prestamo = parseInt(prompt("Ingrese una opción:\n1. $250 \n2. $500 \n3. $750 \n4. $1000 "));
//           recargaSos(prestamo);
//           break;
//         case 4:
          
//           console.log(personal)
//           break;
//         case 5:
//             console.log(companiaResultado)

//             break;
//         case 6: 
//            break;
//         default:
//           alert("Opción inválida. Por favor, selecciona una opción válida.");
//           break;
//       }
// } while (opcion!==4)


      // GUARDO EN EL STORAGE
// sessionStorage.setItem("orden", [1,2,3])
// sessionStorage.setItem("esValido", false)
// sessionStorage.setItem("email", "carlos@gmail.com")
let ordenes = sessionStorage.getItem("orden")
let booleano = sessionStorage.getItem("esValido")
let email = sessionStorage.getItem("email")

console.log(ordenes)
console.log(booleano)
console.log(email)

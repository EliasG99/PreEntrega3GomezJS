let montoAcumulado = parseFloat(localStorage.getItem('montoAcumulado')) || 0;
let saldoSos = parseFloat(localStorage.getItem("saldoSos")) || 0;
let selectedImageUrl = "";





const formulario = document.getElementById('miFormulario');
const resultadoElemento = document.getElementById('resultado');
const formularioContainer = document.getElementById('formularioContainer');
const resultadoContainer = document.getElementById('resultadoContainer');

function guardarDatosTitular(){

  const inputNumero = document.getElementById("numero");
  const inputNombre = document.getElementById('nombre');
  const inputApellido = document.getElementById('apellido');
  const inputEmail = document.getElementById('email');




  
  const datos = {
    numero: inputNumero.value,
    nombre: inputNombre.value,
    apellido: inputApellido.value,
    email: inputEmail.value
  };
      

  localStorage.setItem('datosFormulario', JSON.stringify(datos));


    window.location.href = 'page2.html'; // Cambia "otraParte" con el ID o nombre del elemento al que deseas redireccionar
}







    function showInput(imgOp) {
      // Hide all option containers
      const optionContainers = document.querySelectorAll('.containers');
      optionContainers.forEach(container => {
        container.classList.add('hidden');
      });

      const inputContainer = document.getElementById('inputContainer');
      inputContainer.classList.remove('hidden');


   
      selectedImageUrl= imgOp;
      document.getElementById('selectedImage').style.display = 'block';
      document.getElementById('selectedImg').src = selectedImageUrl;
    }




    function agregarMonto() {
      const inputMonto = document.getElementById('monto').value;
     
   
      const monto = parseFloat(inputMonto);

      montoAcumulado = montoAcumulado + monto;
    //   alert(`Recarga Exitosa. Usted recargo $ : ${montoAcumulado}`);
        localStorage.setItem('montoAcumulado', montoAcumulado.toString());
    

      const recargaExitosaMessage = document.getElementById('recargaExitosa');
      recargaExitosaMessage.classList.remove('hidden');
      document.getElementById('monto').value = '';

     
      setTimeout(function() {
        window.location.href = 'page3.html'; 
    }, 3000);


    }







function consultarSaldo(){
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.classList.remove("hidden")

    const montoAcumulado = parseFloat(localStorage.getItem('montoAcumulado'));
    const saldoSos = parseFloat(localStorage.getItem("saldoSos"));
    if(montoAcumulado === 0){
        resultadoDiv.innerHTML =`<p>No tienes saldo: ${montoAcumulado}</p>` ;

    } else {

        resultadoDiv.innerHTML = `<p> Saldo: ${montoAcumulado}</p>
                                 <p> Debe: ${saldoSos*500  }</p>`;
    }
 



}

   function datosTitular(){

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.classList.remove("hidden")

    const datosGuardados = localStorage.getItem('datosFormulario');
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      resultadoDiv.innerHTML = `
        <p>Número: ${datos.numero}</p>
        <p>Nombre: ${datos.nombre}</p>
        <p>Apellido: ${datos.apellido}</p>
        <p>Email: ${datos.email}</p>
      `;
    } else {
      resultadoDiv.innerHTML = '<p>No hay datos guardados.</p>';
    }
   }   

   function realizarRecarga() {
    window.location.href = 'page2.html';
  }



function recargaSos(){
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.classList.remove("hidden")

   montoAcumulado = montoAcumulado + 500; 
    saldoSos ++ ;

    localStorage.setItem("saldoSos", saldoSos.toString())
    localStorage.setItem('montoAcumulado', montoAcumulado.toString());
   

    resultadoDiv.innerHTML = "<p>Se acreditaron 500$</p>"



}

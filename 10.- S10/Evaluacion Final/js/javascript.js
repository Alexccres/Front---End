// Ejecutar un evento sumbit cuando se realice la acción
$("#reserva").submit(function (evento){
// Evitando cualquier evento por default que tenga el formulario
   evento.preventdefault();

   // Obteniendo los valores de los input del html, para el formulario de reserva
   // Se estan obteniendo a traves del id
   var nombre = $("#nombre Reserva").val();
   var correo = $("#correo Reserva").val();
   var telefono = $("#telefono Reserva").val();
   var fecha = $("#fecha Reserva").val();
   var hora = $("#hora Reserva").val();
   var asistentes = $("#asistentes Reserva").val();
   var check = $("#examplecheck1 Reserva").prop("checked");

   // Validar formulario y si no dar alertas de que los campos no pueden estar vacios y son obligatorios
   if(nombre == ""){
     console.log(correo)
     alert("El campo nombre es obligatorio")
   }else if (correo == "" || correo == null){
     alert(" El campo correo es obligatorio")
   }else if (telefono == ""){
     alert(" El campo telefono es obligatorio")
   }else if (fecha == ""){
     alert(" El campo fecha es obligatorio")
   }else if (hora == ""){
     alert(" El campo hora es obligatorio")  
   }else if (correo == ""){
     alert(" El campo asistentes es obligatorio")
   }else if (check){
     alert(" Debe aceptar los terminos y condiciones")


})

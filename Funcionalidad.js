
var IVA = 0.21;
var CL = 0.13;
var PR = 0.27;
var dias_iv = 30;
var CCC = 0.035;
var IMP = 0.04;
var MEN = 0;
//Variable para los 60 Pesos

function init(){

    //Variables desde el front

    var Precio = document.getElementById("Precio");
    var Costo = document.getElementById("Costo");
    var Producto = document.getElementById("Producto");
    var Tipo_de_publicacion = document.getElementById("Tipo_de_publicacion");
    var Monto_envio_gratis = document.getElementById("Monto_envio_gratis");
    var IV_diario = document.getElementById("IV_diario");
    var Calcular = document.getElementById("Calcular");
    var Por_rentabilidad = document.getElementById("Por_rentabilidad");
    var Monto_de_rentabilidad = document.getElementById("Monto_de_rentabilidad")
    var Iv_monto_de_rentabilidad = document.getElementById("Iv_monto_de_rentabilidad")
    //Eventos

    Calcular.onclick = function(Eventos){

        CL = 0.13;

        if (parseFloat(Precio.value) < 4000) {

            MEN = 60;

        }

        if (Tipo_de_publicacion.value == "PR") {

            CL = PR;
            
        }

        //Calculo del monto 

        Monto_de_rentabilidad.textContent = parseFloat(Precio.value)
         - (parseFloat(Precio.value) * CL)
         - (parseFloat(Precio.value) * IVA) 
         - (parseFloat(Precio.value) * IMP)
         - (parseFloat(Precio.value) * CCC)
         - parseFloat(Costo.value)
         - parseFloat(Monto_envio_gratis.value)
         - MEN
         ;
        
        Por_rentabilidad.textContent = (parseFloat(Monto_de_rentabilidad.textContent)
        / parseFloat(Precio.value)) * 100;




    }




}
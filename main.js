
var ingreso= document.getElementById("texto");
var salida= document.getElementById("texencrip");
var copiarB= document.getElementById("copy");
var encriptarB= document.getElementById("encrip");
var desencriptarB= document.getElementById("desencrip");

var dibujo= document.getElementById("saletex");


encriptarB.onclick =encriptar;
desencriptarB.onclick =desencriptar;
ingreso.focus();


copiarB.addEventListener('click', copiar = () =>{
var contenido= salida.value
navigator.clipboard.writeText(contenido);

})

function encriptar(){

    if(ingreso.value==""){

        alert("Ingrese primero algún texto");
        ingreso.placeholder="  <-------- Ingrese su texto aquí"

    }
    else{

        let cadena=[];
        salida.value="";
        for (var i = 0; i < ingreso.value.length; i++) {
                    cadena[i]=ingreso.value[i];
                  }

        for (var i = 0; i < cadena.length; i++) {
                  
            if((cadena[i].charCodeAt(0)<97&&cadena[i].charCodeAt(0)!=32)||(cadena[i].charCodeAt(0)>122&&cadena[i]!='ñ')){

                alert("Ingrese sólo minusculas sin caracteres especiales");
                copiarB.style.display="none"
                salida.value="";
                break;
            }
            else{

                if(cadena[i]=="e"){
                    cadena.splice(i, 1, "enter");

                }
                if(cadena[i]=="i"){
                    cadena.splice(i, 1, "imes");
                }
                if(cadena[i]=="a"){
                    cadena.splice(i, 1, "ai");
                }
                if(cadena[i]=="o"){
                    cadena.splice(i, 1, "ober");
                }
                if(cadena[i]=="u"){
                    cadena.splice(i, 1, "ufat");
                }
                salida.value=salida.value+cadena[i];  

                dibujo.style.backgroundImage="url('imagenes/candado1.png')";

                
                copiarB.style.display="block";     
                
            }

                }
                

    }

                   }
 function desencriptar(){

    if(ingreso.value==""){
        alert("Ingrese primero algún texto");
        ingreso.placeholder="  <-------- Ingrese su texto aquí"
        copiarB.style.display="none"
        salida.value="";
                        }

        else{

            let cadena=[];
            salida.value="";
            for (var i = 0; i < ingreso.value.length; i++) {
                        cadena[i]=ingreso.value[i];
                      }
    
            for (var i = 0; i < cadena.length; i++) {
                      
                if((cadena[i].charCodeAt(0)<97&&cadena[i].charCodeAt(0)!=32)||(cadena[i].charCodeAt(0)>122&&cadena[i]!='ñ')){
    
                    alert("Ingrese sólo minusculas sin caracteres especiales");
                    copiarB.style.display="none"
                    salida.value="";
                    break;
                }
                else{


            

            salida.value="";
            let textoDesenc="";
            let result;
            textoDesenc=ingreso.value;

            result= textoDesenc.replace(/ober/gi, "o");
            result= result.replace(/enter/gi, "e");
            result= result.replace(/imes/gi, "i");
            result= result.replace(/ai/gi, "a");
            result= result.replace(/ufat/gi, "u");

            salida.value=result;
            dibujo.style.backgroundImage="url('imagenes/candado2.png')";

            copiarB.style.display="block";   

                }
            }


                    
                
                 }              


                }
            function toggle(elemento) {
             	   if(elemento.value=="a") {
                  document.getElementById("uno").style.display = "block";
                  document.getElementById("dos").style.display = "none";
				  document.getElementById("tres").style.display = "none";
                  document.getElementById("cuatro").style.display = "none";
               }else{
                   if(elemento.value=="b"){
                  document.getElementById("uno").style.display = "none";
                  document.getElementById("dos").style.display = "block";
				  document.getElementById("tres").style.display = "none";
                  document.getElementById("cuatro").style.display = "none";
                }else{
                   if(elemento.value=="c"){
                  document.getElementById("uno").style.display = "none";
                  document.getElementById("dos").style.display = "none";
				  document.getElementById("tres").style.display = "block";
                  document.getElementById("cuatro").style.display = "none";
				}else{
                   if(elemento.value=="d"){
                  document.getElementById("uno").style.display = "none";
                  document.getElementById("dos").style.display = "none";
				  document.getElementById("tres").style.display = "none";
                  document.getElementById("cuatro").style.display = "block";
				 	  }
                }  
           }
     }
}


	
function check_file() {
                str=document.getElementById('archivo').value.toUpperCase();
        suffix=".pdf";
        suffix2=".PDF";
        if(!(str.indexOf(suffix, str.length - suffix.length) !== -1||
                       str.indexOf(suffix2, str.length - suffix2.length) !== -1)){
        alert('Tipo de archivo no permitido,Elige un archivo en .PDF');
            document.getElementById('archivo').value='';
        }
    }
	
	 
/*FUNCION PARA DELYVERY EN IMPRIMIRFINAL*/

function verdelyvery() {
	var ver = document.getElementById('delivery').value;
	if(ver == "SI"){
		document.getElementById("divdelivery").style.display="block";
		}
	
	if(ver == "NO"){
		document.getElementById("divdelivery").style.display="none";
		}	
	}
	
	
/*FUNCION PARA VER ORDEN*/

function orden() {
		document.getElementById("orden").style.display="block";
	}
	




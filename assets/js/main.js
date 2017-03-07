
var name = prompt("Ingresa tu nombre");
var nombre = document.getElementById("nombre");
nombre.innerHTML = name.toUpperCase();
temas("spring2");

//funcion del boton para los temas dependiendo del spring

function temas(valor){
  var leccion = document.getElementById("leccion");
  var contenido = document.getElementById("contenido");

  leccion.innerHTML = titulo(valor);
  contenido.innerHTML = sumary(valor);
  mostrar(valor);


}

function titulo(valor){
  var titulo = "";
  switch (valor) {
    case "spring1": titulo = '<h4> Sprint 1:  Introducción a JavaScript</h4>';
      break;
    case "spring2": titulo = "<h4>Sprint 2: Introducción al desarrollo web y construcción de páginas web</h4>";
      break;
    case "spring3": titulo = "<h4>Sprint 3: </h4>";
      break;
    default:
  }
  return titulo;

}

function sumary(valor){
  var contenidoTemas;

  switch (valor) {
    case "spring1": contenidoTemas = "<ol>" +
                                      "<li> Fundamentos de Programación</li>" +
                                      "<li> Funciones</li>" +
                                      "<li> Arreglos</li>" +
                                      "<li> Objetos</li>" +
                                    "</ol>";
      break;
    case "spring2": contenidoTemas = "<ol>" +
                                        "<li> Ciclo de vida del desarrollo web y arquitectura básica cliente/servidor/ Configuración del ambiente de trabajo e introducción a git</li>" +
                                        "<li> HTML y Javascript en el navegaador</li>" +
                                        "<li> Manejo de comandos básicos de git en la terminal</li>" +
                                        "<li> Git / Resolución de conflictos / Branching model</li>" +
                                        "<li> DOM</li>" +
                                    "</ol>";
      break;
    case "spring3": contenidoTemas = "No hay lecciones (Todavía)";
      break;
    default:

  }
  return contenidoTemas;

}

function mostrar(valor){
  var text = document.getElementById(valor);
    text.style.display = "block";
  switch (valor) {
    case "spring1":  document.getElementById("spring2").style.display = "none";
                     document.getElementById("spring3").style.display = "none";
      break;
    case "spring2":  document.getElementById("spring1").style.display = "none";
                     document.getElementById("spring3").style.display = "none";
      break;
    case "spring3":  document.getElementById("spring1").style.display = "none";
                    document.getElementById("spring2").style.display = "none";
        break;
    default:

  }

}

//Funciones de la solucion de respuesta

function solucion1(){
  var pregunta = document.getElementById('quiz1')
  var r1 = document.getElementsByName("1p1");
  var r2 = document.getElementsByName("1p2");
  var r3 = document.getElementsByName("1p3");
  var c = 0;

  if(validar(r1,r2,r3)){

    for(i=0; i<3; i++){
      if(r1[i].checked){ if(r1[i].value == "3"){ c++;}}
      if(r2[i].checked){ if(r2[i].value == "2"){ c++;}}
      if(r3[i].checked){ if(r3[i].value == "3"){ c++;}}
    }
    pregunta.innerHTML = "Tienes " + c + "  respuestas correctas";
  }else{
    alert("Flatan pregunatas por responder");
  }

}

function solucion2(){
  var pregunta = document.getElementById('quiz2')
  var r1 = document.getElementsByName("2p1");
  var r2 = document.getElementsByName("2p2");
  var r3 = document.getElementsByName("2p3");
  var c = 0;

  if(validar(r1,r2,r3)){

    for(i=0; i<3; i++){
      if(r1[i].checked){ if(r1[i].value == "1"){ c++;}}
      if(r2[i].checked){ if(r2[i].value == "1"){ c++;}}
      if(r3[i].checked){ if(r3[i].value == "2"){ c++;}}
    }
    pregunta.innerHTML = "Tienes " + c + "  respuestas correctas";
  }else{
    alert("Flatan pregunatas por responder");
  }

}

function validar(r1,r2,r3){
  var x = 0;
  r1.forEach(function(item,i){
    if(item.checked){ x++;}
  });
  r2.forEach(function(item,i){
    if(item.checked){ x++;}
  });
  r3.forEach(function(item,i){
    if(item.checked){ x++;}
  });
  if(x==3){ return true;}else{return false;}

}




//Funcion del boton dropdown
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

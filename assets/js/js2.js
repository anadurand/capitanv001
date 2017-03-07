//Aqui va el codigo de la pagina de dropdown
//data inicial
var coders = [ { nombre : "Meche", apellido : "Zubieta",  promocion : "1era. promoción", estado : "Trabajando" },

			 { nombre : "Arabela", apellido : "Rojas", promocion : "2da. promoción", estado : "Trabajando" },

			 { nombre : "Maria", apellido : "Rosán",  promocion : "2da. promoción", estado : "Trabajando" },

			 { nombre : "Guadalupe", apellido : "Racio",  promocion : "3era. promoción", estado : "Trabajando" },

			 { nombre : "Sara", apellido : "Casa",  promocion : "3era. promoción", estado : "Trabajando" },

			 { nombre : "Daniella", apellido : "Durán",  promocion : "4ta. promoción", estado : "Trabajando" },

			 { nombre : "Michelle", apellido : "Seguil",  promocion : "5ta. promoción", estado : "Trabajando" },

			 { nombre : "Diana", apellido : "Navarro",  promocion : "5ta. promoción", estado : "Trabajando" } ];

var contenedor = document.getElementById("contenedor")

function print(item){

  return     "<div class = 'div-coder'>" +
              "Nombre: " + item.nombre + "<br>" +
              "Apellido: " + item.apellido + "<br>" +
              "Promocion: " + item.promocion + "<br>" +
              "Estado: " + item.estado +
              "</div>";

}
var frase = "";
for(i=0; i<coders.length;i++){
  frase += print(coders[i]);
}

contenedor.innerHTML = frase;

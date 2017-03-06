//Aqui va el codigo de la pagina de dropdown

var contenedor = document.getElementById("contenedor")
var arrayEstudiantes=[];
//este array tiene dentro objetos
function Estudiante(nombre,apellido, promocion, estado){
  this.name = nombre;
  this.apellido = apellido;
  this.promocion = promocion;
  this.estado= estado;
  this.print = function(){
    return "Nombre: " + this.name + "<br>" +
           "Apellido: " + this.apellido + "<br>" +
           "Promocion: " + this.promocion + "<br>" +
           "Estado: " + this.estado + "<br>";
  }
}
var frase = "";
for(i=0; i<arrayEstudiantes.length;i++){

  frase += arrayEstudiantes[i].print;

}

contenedor.innerHTML = frase;


for (var i = 0; i <10; i++) {

  const container = document.getElementById('container'); 
  const Imagendepelicula = document.querySelector('body'); 
  const link = prompt("ingrese el link de la imagen de su pelicula");

  let nombre= prompt("ingrese el nombre de la pelucila") 

  const NuevaImage = document.createElement('img'); 


  Imagendepelicula.classList.add('position'); 

  NuevaImage.classList.add('imagenes'); 
  NuevaImage.setAttribute('src', link); 

  NuevaImage.setAttribute('alt', "mascota del usuario") 

  container.appendChild(NuevaImage);
  document.write(nombre)
}
  
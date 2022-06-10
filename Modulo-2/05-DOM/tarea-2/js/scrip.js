

let n = prompt("ingrese cuantas peliculas quiere")

for (var i = 0; i < n; i++) {
  let newImage = document.createElement('img');
  let newTitle = document.createElement('h2');
  const containerInfo = document.querySelector('#containerInfo')
  const nameUsuario = prompt('Por favor ingresa nombre de la imagen');
  const ageUsuario = prompt('Por favor ingresa nombre de pelicula');
  const imageUsuario = prompt('Por favor ingresa la URL del cartel de la pelicula');
  newImage.setAttribute('src', imageUsuario);
  newImage.setAttribute('alt', `${nameUsuario} avatar`);
  newImage.classList.add('image');
  newTitle.textContent = `${nameUsuario}, ${ageUsuario}`;
  containerInfo.appendChild(newImage);
  containerInfo.appendChild(newTitle);


}
 
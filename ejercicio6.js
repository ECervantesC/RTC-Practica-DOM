// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.
console.log('Hola Ejercicio 6')

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]
let myUl = document.createElement('ul')
albums.forEach((album) => {
  let myLi = document.createElement('li')
  myLi.textContent = album
  myUl.appendChild(myLi)
})
document.body.appendChild(myUl)

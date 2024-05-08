// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere"

const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
console.log('Hola')
const myDiv = document.querySelector("[data-function='printHere']")
const myUl = document.createElement('ul')
places.forEach((element) => {
  const myLi = document.createElement('li')
  myLi.textContent = element
  myUl.appendChild(myLi)
})
myDiv.appendChild(myUl)

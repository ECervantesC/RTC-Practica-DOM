// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const myUl = document.createElement('ul')
function liCreation(array, ulToAppend) {
  array.forEach((element) => {
    let myLi = document.createElement('li')
    myLi.textContent = element
    ulToAppend.appendChild(myLi)
  })
}
liCreation(countries, myUl)
document.body.appendChild(myUl)
// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let elementToRemove = document.querySelector('.fn-remove-me')
elementToRemove.remove()
// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
let myDiv = document.querySelector("[data-function='printHere']")
console.log(myDiv)
const myUl2 = document.createElement('ul')
cars.forEach((car) => {
  let myLi = document.createElement('li')
  myLi.textContent = car
  myUl2.appendChild(myLi)
})
myDiv.appendChild(myUl2)
liCreation(cars, myUl2)
myDiv.appendChild(myUl2)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countriesObject = [
  { title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (const key in countriesObject) {
  let divToCreate = document.createElement('div')
  const myH4 = document.createElement('h4')
  myH4.textContent = countriesObject[key].title
  const myImage = document.createElement('img')
  myImage.scr = countriesObject[key].imgUrl
  myImage.alt = 'Imagen aleatoria'
  divToCreate.appendChild(myH4)
  divToCreate.appendChild(myImage)
  document.body.appendChild(divToCreate)
}

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
let myButton = document.createElement('button')
myButton.textContent = 'Elimina el último div'
myButton.style.margin = '10px'
myButton.style.padding = '5px'
document.body.appendChild(myButton)
let myDivsArray = document.querySelectorAll('div')
function deleteDiv() {
  let myDivsArray = document.querySelectorAll('div')
  if (myDivsArray.length === 0) {
    console.log('Ya no quedan divs')
    return
  }
  console.log(myDivsArray)
  myDivsArray[myDivsArray.length - 1].remove()
}
myButton.addEventListener('click', deleteDiv)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
let myDivsArray2 = document.querySelectorAll('div')
for (const element of myDivsArray2) {
  console.log(element)
  let myDiv = element
  let myButton2 = document.createElement('button')
  myButton2.textContent = 'Elimina este div'
  myButton2.style.margin = '10px'
  myButton2.style.padding = '5px'
  myDiv.appendChild(myButton2)
}
